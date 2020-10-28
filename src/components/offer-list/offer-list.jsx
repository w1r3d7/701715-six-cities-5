import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';

import {OFFER_PROP_TYPES} from '../../types.js';

const OfferList = ({offers, onHoverCard, onOfferClick}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard
        offer={offer}
        key={offer.id}
        onCardHover={onHoverCard}
        onCardClick={onOfferClick}/>
    ))}
  </div>
);

OfferList.propTypes = {
  onHoverCard: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default OfferList;
