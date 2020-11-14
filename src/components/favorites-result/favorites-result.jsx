import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';

import {OFFER_PROP_TYPES} from '../../types.js';

const getCities = (offers) => {
  const cities = offers.map((offer) => offer.city);
  const uniqCities = new Set(cities);
  return Array.from(uniqCities);
};

const FavoritesResult = ({favoriteOffers}) => {
  const cities = getCities(favoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((cityItem) => (
              <FavoritesItem
                key={cityItem}
                city={cityItem}
                offers={favoriteOffers}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesResult.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default FavoritesResult;
