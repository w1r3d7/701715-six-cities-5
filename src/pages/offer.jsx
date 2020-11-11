import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../components/app-header/app-header';
import ReviewsList from '../components/reviews-list/reviews-list';
import OfferDetailsCard from '../components/offer-details-card/offer-details-card';
import OfferDetailsMap from '../components/offer-details-map/offer-details-map';
import OfferDetailsPremiumMark from '../components/offer-details-premium-mark/offer-details-premium-mark';
import Loading from '../components/loading/loading';

import {getRatingInPercentage, checkForPlural} from '../utils.js';
import {OFFER_PROP_TYPES} from '../types.js';
import {BOOKMARK_ACTIVE_CLASS} from '../constants.js';
import {fetchOfferDetails, requestOfferDetails} from '../store/data/actions';
import {getOfferDetails, getOfferDetailsLoadingStatus} from '../store/selectors';
import OfferDetailsProperty from '../components/offers-details-property/offers-details-property';


const OTHER_OFFERS_MAX_COUNT = 3;


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
          {
            isOfferDetailsLoaded
              ?
              <OfferDetailsProperty offer={offer} />
              :
              <Loading />
          }
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
