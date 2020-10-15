import React from 'react';
import {BOOKMARK_ACTIVE_CLASS} from '../../const.js';
import {getRatingInPercentage} from '../../utils.js';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';

const OfferOtherCard = ({offer}) => {
  const {
    photosUrl,
    type,
    price,
    description,
    isInBookmark,
    rating
  } = offer;

  const [mainPhotoUrl] = photosUrl;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercentage(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferOtherCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default OfferOtherCard;
