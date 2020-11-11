import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AppHeader from '../app-header/app-header';
import CitiesResult from '../cities-result/cities-result';
import CitiesEmpty from '../cities-empty/cities-empty';
import CitiesList from '../cities-list/cities-list';
import Loading from '../loading/loading';

import {OFFER_PROP_TYPES} from '../../types.js';
import {changeCity} from '../../store/app';
import {
  getCurrentCity,
  getCurrentFilter,
  getFilteredOffers,
  getOffers,
  getOffersLoadingStatus
} from '../../store/selectors';


const PAGE_MAIN_EMPTY_CLASS = `page__main--index-empty`;

const Main = ({
  offers,
  onOfferClick,
  currentCity,
  onCityChange,
  currentFilter,
  filteredOffers,
  isOffersLoaded
}) => {
  const handleCityClick = (evt) => {
    evt.preventDefault();
    const selectedCity = evt.target.textContent;
    if (currentCity !== selectedCity) {
      onCityChange(selectedCity, offers, currentFilter);
    }
  };

  const isOffersEmpty = !(filteredOffers.length > 0);

  const citiesContainer = (
    isOffersEmpty
      ? <CitiesEmpty city={currentCity} />
      : <CitiesResult city={currentCity} onOfferClick={onOfferClick} offers={filteredOffers}/>
  );

  return (
    <div className={`page page--gray page--main ${isOffersEmpty ? PAGE_MAIN_EMPTY_CLASS : ``}`}>
      <AppHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList handleCityClick={handleCityClick} currentCity={currentCity} />
        <div className="cities">
          {isOffersLoaded ? citiesContainer : <Loading />}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filteredOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offers: getOffers(state),
  filteredOffers: getFilteredOffers(state),
  currentFilter: getCurrentFilter(state),
  isOffersLoaded: getOffersLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => {
  const onCityChange = bindActionCreators(changeCity, dispatch);
  return {onCityChange: (currentCity) => onCityChange(currentCity)};
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
