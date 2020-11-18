import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlaceCard from '../place-card/place-card';
import PlaceCardPremiumMark from '../place-card-premium-mark/place-card-premium-mark';

import {OFFER_PROP_TYPES} from '../../types.js';
import {RouteUrl} from '../../constants/constants';


const OfferCard = ({offer, onCardHover}) => {
  const {
    id,
    previewImage,
    isPremium,
  } = offer;

  const handleCardHover = () => {
    onCardHover(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleCardHover}>
      <PlaceCardPremiumMark isPremium={isPremium} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={RouteUrl.OFFER + id}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <PlaceCard offer={offer} />
    </article>
  );
};

OfferCard.propTypes = {
  onCardHover: PropTypes.func.isRequired,
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default OfferCard;
