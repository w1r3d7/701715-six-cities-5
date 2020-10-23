import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppHeader from '../app-header/app-header';
import CitiesResult from '../cities-result/cities-result';
import CitiesEmpty from '../cities-empty/cities-empty';
import {OFFER_PROP_TYPES} from '../../types.js';
import ActionCreator from '../../store/action-creator';
import CitiesList from '../cities-list/cities-list';

const PAGE_MAIN_EMPTY_CLASS = `page__main--index-empty`;

const Main = (props) => {
  const {offers, onOfferClick, currentCity, onCityChange, filteredOffers} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    const selectedCity = evt.target.textContent;
    if (currentCity !== selectedCity) {
      onCityChange(selectedCity, offers);
    }
  };

  const isOffersEmpty = !(filteredOffers.length > 0);

  return (
    <div className={`page page--gray page--main ${isOffersEmpty ? PAGE_MAIN_EMPTY_CLASS : ``}`}>
      <AppHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList handleCityClick={handleCityClick} currentCity={currentCity} />
        <div className="cities">
          {
            isOffersEmpty
              ? <CitiesEmpty city={currentCity} />
              : <CitiesResult
                offers={filteredOffers}
                city={currentCity}
                onOfferClick={onOfferClick}
                placesCount={filteredOffers.length}
              />
          }
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
  filteredOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
  filteredOffers: state.filteredOffers,
});

const mapDispatchToProps = (dispatch) => {
  const onCityChange = bindActionCreators(ActionCreator.changeCity, dispatch);
  return {onCityChange: (currentCity, offers) => onCityChange(currentCity, offers)};
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
