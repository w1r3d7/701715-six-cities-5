import React from 'react';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import PlaceCard from '../place-card/place-card';
import {PREMIUM_TEMPLATE} from '../../const.js';

const OfferDetailsCard = ({offer}) => {
  const {photosUrl, isPremium} = offer;
  const [mainPhotoUrl] = photosUrl;

  return (
    <article className="near-places__card place-card">
      {isPremium ? PREMIUM_TEMPLATE : ``}
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
