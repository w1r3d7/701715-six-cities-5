import React from 'react';
import {Redirect} from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import {getRatingInPercentage} from '../../utils.js';
import {OFFER_PROP_TYPES} from '../../types.js';
import PropTypes from 'prop-types';
import OfferMap from '../offer-map/offer-map';
import ReviewsList from '../reviews-list/reviews-list';
import {BOOKMARK_ACTIVE_CLASS} from '../../const.js';
import OfferOtherCard from '../offer-other-card/offer-other-card';

const PREMIUM_HOST_CLASS = `property__avatar-wrapper--pro`;
const PREMIUM_TEMPLATE = (
  <div className="property__mark">
    <span>Premium</span>
  </div>
);

const OfferDetails = ({offers}) => {
  const path = document.location.pathname;
  const [,, offerId] = path.split(`/`);

  let offer = null;
  const otherOffers = [];

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

  const generatedFacility = facilities.map((facility) => <li key={facility} className="property__inside-item">{facility}</li>);

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
              {isPremium ? PREMIUM_TEMPLATE : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">{description}</h1>
                <button className={`property__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`} type="button">
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
                <li className="property__feature property__feature--bedrooms">{bedroomsCount > 1 ? `${bedroomsCount} Bedrooms` : `${bedroomsCount} Bedroom`} </li>
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
                  <p className="property__text">
                    {hostDescription}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <OfferMap />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffers.map((offerItem) => <OfferOtherCard offer={offerItem} key={offerItem.id}/>)}
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
};

export default OfferDetails;
