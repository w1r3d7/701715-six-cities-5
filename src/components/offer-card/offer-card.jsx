import React from 'react';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import {getRatingInPercentage} from '../../utils.js';
import {BOOKMARK_ACTIVE_CLASS} from '../../const.js';

const OfferCard = (props) => {
  const {
    id,
    photosUrl,
    type,
    price,
    description,
    isPremium,
    isInBookmark,
    rating
  } = props.offer;

  const [mainPhotoUrl] = photosUrl;
  const {onCardHover, onCardClick} = props;

  const premiumTemplate = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const handleCardHover = () => {
    onCardHover(id);
  };

  const handleCardClick = (evt) => {
    evt.preventDefault();
    onCardClick(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleCardHover} onClick={handleCardClick}>
      {isPremium ? premiumTemplate : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``} `} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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
    </article>
  );
};

OfferCard.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES),
};

export default OfferCard;
