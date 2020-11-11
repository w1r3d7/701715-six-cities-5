import React from 'react';
import PropTypes from 'prop-types';

import OfferDetailsPremiumMark from '../offer-details-premium-mark/offer-details-premium-mark';

import {BOOKMARK_ACTIVE_CLASS} from '../../constants';
import {checkForPlural, getRatingInPercentage} from '../../utils';
import {OFFER_PROP_TYPES} from '../../types';
import {withLoading} from '../../hocs/with-loading';
import ReviewsContainer from '../reviews-container/reviews-container';

const PREMIUM_HOST_CLASS = `property__avatar-wrapper--pro`;
const BEDROOM = `bedroom`;

const OfferDetailsProperty = ({offer}) => {
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
    id,
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
          <ReviewsContainer offerId={id} />
        </div>
      </div>
      {/*<OfferDetailsMap offers={otherOffers} city={offer.city} />*/}
    </section>
  );
};

OfferDetailsProperty.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};
export {OfferDetailsProperty};
export default withLoading(OfferDetailsProperty);
