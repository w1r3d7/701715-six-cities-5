import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';
import PlaceCardPremiumMark from '../place-card-premium-mark/place-card-premium-mark';

import {OFFER_PROP_TYPES} from '../../types.js';
import {Link} from 'react-router-dom';
import {RouteUrl} from '../../constants';

const OfferDetailsCard = ({offer}) => {
  const {previewImage, isPremium, id} = offer;

  return (
    <article className="near-places__card place-card">
      <PlaceCardPremiumMark isPremium={isPremium} />
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={RouteUrl.OFFER + id}>
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"/>
        </Link>
      </div>
      <PlaceCard offer={offer} />
    </article>
  );
};

OfferDetailsCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default OfferDetailsCard;
