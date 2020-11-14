import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';
import AppFooter from '../components/app-footer/app-footer';
import FavoritesContainer from '../components/favorites-container/favorites-container';

import {fetchFavoriteOffers} from '../store/data/actions';
import {OFFER_PROP_TYPES} from '../types.js';
import {getFavoriteLoadingStatus, getFavoriteOffers} from '../store/selectors';

class Favorites extends PureComponent {

  componentDidMount() {
    this.props.fetchFavoriteOffersAction();
  }

  render() {
    const {favoriteLoadingStatus, favoriteOffers} = this.props;
    return (
      <div className="page">
        <AppHeader />
        <FavoritesContainer isLoaded={favoriteLoadingStatus} favoriteOffers={favoriteOffers} />
        <AppFooter />
      </div>
    );
  }
}

Favorites.propTypes = {
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

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
