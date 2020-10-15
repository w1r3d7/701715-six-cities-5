import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../app-header/app-header';
import CitiesResult from '../cities-result/cities-result';
import CitiesEmpty from '../cities-empty/cities-empty';
import {OFFER_PROP_TYPES} from '../../types.js';
import {City} from '../../const.js';
import {getOffersByCity} from '../../utils.js';

const PAGE_MAIN_EMPTY_CLASS = `page__main--index-empty`;
const LOCATIONS_ITEM_ACTIVE_CLASS = `tabs__item--active`;

const getLocationsItemTemplate = (city, currentCity, handleCityClick) => {
  const isActiveItem = city === currentCity;

  return (
    <li className="locations__item" key={city}>
      <a className={`locations__item-link tabs__item ${isActiveItem ? LOCATIONS_ITEM_ACTIVE_CLASS : ``}`}
        href="#"
        onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCity: City.PARIS
    };

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    evt.preventDefault();

    const currentCity = evt.target.textContent;

    this.setState((prevState) => prevState.currentCity === currentCity ? null : {currentCity});
  }

  render() {
    const {offers, onOfferClick} = this.props;
    const offersByCity = getOffersByCity(offers, this.state.currentCity);
    const isOffersEmpty = !(offersByCity.length > 0);

    return (
      <div className={`page page--gray page--main ${isOffersEmpty ? PAGE_MAIN_EMPTY_CLASS : ``}`}>
        <AppHeader />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                {Object.values(City).map((city) => getLocationsItemTemplate(city, this.state.currentCity, this.handleCityClick))}
              </ul>
            </section>
          </div>
          <div className="cities">
            {
              isOffersEmpty ?
                <CitiesEmpty city={this.state.currentCity} /> :
                <CitiesResult offers={offersByCity} city={this.state.currentCity} onOfferClick={onOfferClick} placesCount={offersByCity.length} />
            }
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default Main;
