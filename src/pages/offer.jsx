import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';
import OfferDetailsCard from '../components/offer-details-card/offer-details-card';

import {OFFER_PROP_TYPES} from '../types.js';
import {fetchOfferDetails} from '../store/data/actions';
import {getOfferDetails, getOfferDetailsLoadingStatus} from '../store/selectors';
import OfferDetailsProperty from '../components/offers-details-property/offers-details-property';

class Offer extends PureComponent {

  componentDidMount() {
    const {fetchOffer} = this.props;
    fetchOffer(this.offerId);
  }

  render() {
    const {match, offer, isOfferDetailsLoaded} = this.props;

    this.offerId = match.params.id;

    return (
      <div className="page">
        <AppHeader />
        <main className="page__main page__main--property">
          <OfferDetailsProperty isLoaded={isOfferDetailsLoaded} offer={offer} />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {/* {otherOffers.map((offerItem) => (*/}
                {/*  <OfferDetailsCard offer={offerItem} key={offerItem.id} />*/}
                {/* ))}*/}
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};

const mapStateToProps = (state) => ({
  offer: getOfferDetails(state),
  isOfferDetailsLoaded: getOfferDetailsLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffer: (id) => dispatch(fetchOfferDetails(id)),
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
