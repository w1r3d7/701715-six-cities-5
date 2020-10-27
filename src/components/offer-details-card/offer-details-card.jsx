import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';
import PlaceCardPremiumMark from '../place-card-premium-mark/place-card-premium-mark';

import {OFFER_PROP_TYPES} from '../../types.js';

const OfferDetailsCard = ({offer}) => {
  const {photosUrl, isPremium} = offer;
  const [mainPhotoUrl] = photosUrl;

  return (
    <article className="near-places__card place-card">
      <PlaceCardPremiumMark isPremium={isPremium} />
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <PlaceCard offer={offer} />
    </article>
  );
};

OfferDetailsCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default OfferDetailsCard;
