import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import FavoritesContainer from '../favorites-container/favorites-container';

import {fetchFavoriteOffers} from '../../store/data/api-actions';
import {OFFER_PROP_TYPES} from '../../types.js';
import {getFavoriteLoadingStatus, getFavoriteOffers} from '../../store/selectors';

const FavoritesPage = ({
  favoriteLoadingStatus,
  favoriteOffers,
  fetchFavoriteOffersAction
}) => {

  useEffect(() => {
    fetchFavoriteOffersAction();
  }, []);

  return (
    <div className="page">
      <AppHeader />
      <FavoritesContainer isLoaded={favoriteLoadingStatus} favoriteOffers={favoriteOffers} />
      <AppFooter />
    </div>
  );
};

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ),
  favoriteLoadingStatus: PropTypes.bool.isRequired,
  fetchFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteOffersAction: () => dispatch(fetchFavoriteOffers())
});

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  favoriteLoadingStatus: getFavoriteLoadingStatus(state),
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
