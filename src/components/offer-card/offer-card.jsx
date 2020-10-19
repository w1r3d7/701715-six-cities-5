import React from 'react';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import PlaceCard from '../place-card/place-card';
import {PREMIUM_TEMPLATE} from '../../const.js';

const OfferCard = ({offer, onCardClick, onCardHover}) => {
  const {
    id,
    photosUrl,
    isPremium,
  } = offer;

  const [mainPhotoUrl] = photosUrl;

  const handleCardHover = () => {
    onCardHover(id);
  };

  const handleCardClick = (evt) => {
    evt.preventDefault();
    onCardClick(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleCardHover} onClick={handleCardClick}>
      {isPremium ? PREMIUM_TEMPLATE : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <PlaceCard offer={offer} />
    </article>
  );
};

OfferCard.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default OfferCard;
