import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AppHeader from '../app-header/app-header';
import ReviewsList from '../reviews-list/reviews-list';
import OfferDetailsCard from '../offer-details-card/offer-details-card';
import OfferDetailsMap from '../offer-details-map/offer-details-map';
import OfferDetailsPremiumMark from '../offer-details-premium-mark/offer-details-premium-mark';

import {getRatingInPercentage, checkForPlural} from '../../utils.js';
import {OFFER_PROP_TYPES} from '../../types.js';
import {BOOKMARK_ACTIVE_CLASS} from '../../constants.js';

const OTHER_OFFERS_MAX_COUNT = 3;
const PREMIUM_HOST_CLASS = `property__avatar-wrapper--pro`;
const BEDROOM = `bedroom`;

const OfferDetails = ({offers, match}) => {
  const offerId = match.params.id;

  let offer = null;
  let otherOffers = [];

  offers.forEach((item) => {
    if (item.id === Number(offerId)) {
      offer = item;
      return;
    }

    otherOffers.push(item);
  });

  if (!offer) {
    return <Redirect to="/" />;
  }

  otherOffers = otherOffers.filter((offerItem) => offerItem.city === offer.city).slice(0, OTHER_OFFERS_MAX_COUNT);

  const {
    photosUrl,
    type,
    price,
    description,
    isPremium,
    isInBookmark,
    facilities,
    rating,
    bedroomsCount,
    maxCapacity,
    hostName,
    hostDescription,
    hostAvatar,
    isHostPremium,
    reviews
  } = offer;

  const generatedPhotos = photosUrl.map((url) => (
    <div className="property__image-wrapper" key={url}>
      <img className="property__image" src={url} alt={type} />
    </div>
  ));

  const generatedFacility = facilities.map((facility) => (
    <li key={facility} className="property__inside-item">{facility}</li>
  ));

  return (
    <div className="page">
      <AppHeader />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {generatedPhotos}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferDetailsPremiumMark isPremium={isPremium} />
              <div className="property__name-wrapper">
                <h1 className="property__name">{description}</h1>
                <button
                  className={`property__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingInPercentage(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedroomsCount} ${checkForPlural(BEDROOM, bedroomsCount)}`}
                </li>
                <li className="property__feature property__feature--adults">Max {maxCapacity} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {generatedFacility}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${isHostPremium ? PREMIUM_HOST_CLASS : ``}`}>
                    <img className="property__avatar user__avatar" src={hostAvatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{hostName}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{hostDescription}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <OfferDetailsMap offers={otherOffers} city={offer.city} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffers.map((offerItem) => (
                <OfferDetailsCard offer={offerItem} key={offerItem.id} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {OfferDetails};
export default connect(mapStateToProps)(OfferDetails);
