import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';
import AppFooter from '../components/app-footer/app-footer';
import FavoritesEmpty from '../components/favorites-empty/favorites-empty';
import FavoritesResult from '../components/favorites-result/favorites-result';

import {OFFER_PROP_TYPES} from '../types.js';

const Favorites = ({offers}) => {
  const favoritesOffers = offers.filter((offer) => offer.isInBookmark);
  const isFavoritesEmpty = Boolean(!favoritesOffers.length);

  return (
    <div className="page">
      <AppHeader />
      {
        isFavoritesEmpty
          ? <FavoritesEmpty />
          : <FavoritesResult favoritesOffers={favoritesOffers}/>
      }
      <AppFooter />
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
