import React from 'react';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import FavoritesCard from '../favorites-card/favorites-card';

const getCities = (offers) => {
  const cities = offers.map((offer) => offer.city);
  const uniqCities = new Set(cities);
  return Array.from(uniqCities);
};

const getFavoritesItems = (city, index, offers) => {
  const favoritesOffersByCities = offers.filter((offer) => offer.city === city);

  return (
    <li className="favorites__locations-items" key={city + index}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffersByCities.map((offer) => (
          <FavoritesCard offer={offer} key={offer.id} />
        ))}
      </div>
    </li>
  );
};


const FavoritesResult = ({favoritesOffers}) => {
  const cities = getCities(favoritesOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((cityItem, index) => getFavoritesItems(cityItem, index, favoritesOffers))}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesResult.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default FavoritesResult;
