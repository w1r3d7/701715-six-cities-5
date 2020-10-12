import React from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesResult from '../favorites-result/favorites-result';
import {OFFER_PROP_TYPES} from '../../types.js';
import PropTypes from 'prop-types';

const Favorites = ({offers}) => {
  const favoritesOffers = offers.filter((offer) => offer.isInBookmark);
  const isFavoritesEmpty = Boolean(!favoritesOffers.length);

  return (
    <div className="page">
      <AppHeader />
      {isFavoritesEmpty ? <FavoritesEmpty /> : <FavoritesResult favoritesOffers={favoritesOffers}/>}
      <AppFooter />
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default Favorites;
