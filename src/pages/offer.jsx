import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';

import {OFFER_PROP_TYPES} from '../types.js';
import {fetchNearbyOffers, fetchOfferDetails} from '../store/data/actions';
import {
  getOfferDetails,
  getOfferDetailsLoadingStatus,
  getNearbyOffers,
  getNearbyOffersLoadingStatus,
} from '../store/selectors';
import OfferDetailsProperty from '../components/offers-details-property/offers-details-property';
import OfferDetailsNearbyList from '../components/offer-details-nearby-list/offer-details-nearby-list';

class Offer extends PureComponent {

  componentDidMount() {
    const {fetchOffer, fetchNearby} = this.props;
    fetchOffer(this.offerId);
    fetchNearby(this.offerId);
  }

  render() {
    const {
      match,
      offer,
      isOfferDetailsLoaded,
      nearbyOffers,
      isNearbyOffersLoaded
    } = this.props;

    this.offerId = match.params.id;

    return (
      <div className="page">
        <AppHeader />
        <main className="page__main page__main--property">
          <OfferDetailsProperty isLoaded={isOfferDetailsLoaded && isNearbyOffersLoaded} offer={offer} nearbyOffers={nearbyOffers} />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferDetailsNearbyList nearbyOffers={nearbyOffers} isLoaded={isNearbyOffersLoaded} />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES),
  isOfferDetailsLoaded: PropTypes.bool.isRequired,
  fetchOffer: PropTypes.func.isRequired,
  fetchNearby: PropTypes.func.isRequired,
  nearbyOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ),
  isNearbyOffersLoaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};

const mapStateToProps = (state) => ({
  offer: getOfferDetails(state),
  isOfferDetailsLoaded: getOfferDetailsLoadingStatus(state),
  nearbyOffers: getNearbyOffers(state),
  isNearbyOffersLoaded: getNearbyOffersLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffer: (id) => dispatch(fetchOfferDetails(id)),
  fetchNearby: (id) => dispatch(fetchNearbyOffers(id)),
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
