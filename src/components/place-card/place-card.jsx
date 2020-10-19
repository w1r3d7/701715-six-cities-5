import React from 'react';
import {BOOKMARK_ACTIVE_CLASS} from '../../const';
import {getRatingInPercentage} from '../../utils';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types';

const PlaceCard = ({offer, className}) => {
  const {
    type,
    price,
    description,
    isInBookmark,
    rating
  } = offer;
  return (
    <div className={`${className} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: getRatingInPercentage(rating)}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{description}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

PlaceCard.defaultProps = {
  className: ``
};

PlaceCard.propTypes = {
  className: PropTypes.string.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired
};

export default PlaceCard;
