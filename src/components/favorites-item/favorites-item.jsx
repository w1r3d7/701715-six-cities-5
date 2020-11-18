import React from 'react';
import PropTypes from 'prop-types';

import FavoritesCard from '../favorites-card/favorites-card';

import {OFFER_PROP_TYPES} from '../../types.js';

const FavoritesItem = ({city, offers}) => {
  const favoritesOffersByCities = offers.filter((offer) => offer.city.name === city);

  return (
    <li className="favorites__locations-items" key={city}>
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

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default FavoritesItem;
