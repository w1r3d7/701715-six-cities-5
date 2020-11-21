import React from 'react';
import PropTypes from 'prop-types';

import withLoading from '../../hocs/with-loading';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesResult from '../favorites-result/favorites-result';
import {OFFER_PROP_TYPES} from '../../types';

const FavoritesContainer = ({favoriteOffers}) => {
  const isFavoritesEmpty = Boolean(!favoriteOffers.length);

  return (
    isFavoritesEmpty
      ? <FavoritesEmpty />
      : <FavoritesResult favoriteOffers={favoriteOffers} />
  );
};

FavoritesContainer.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  )
};

export default withLoading(FavoritesContainer);
