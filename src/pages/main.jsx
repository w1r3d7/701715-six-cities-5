import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';
import CitiesResult from '../components/cities-result/cities-result';
import CitiesEmpty from '../components/cities-empty/cities-empty';
import CitiesList from '../components/cities-list/cities-list';
import Loading from '../components/loading/loading';

import {OFFER_PROP_TYPES} from '../types.js';
import {changeCity} from '../store/app/actions';
import {
  getCurrentCity,
  getCurrentFilter,
  getFilteredOffers,
  getOffers,
  getOffersLoadingStatus
} from '../store/selectors';


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

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (currentCity) => dispatch(changeCity(currentCity))
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
