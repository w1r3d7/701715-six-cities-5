import React from 'react';
import Map from '../map/map';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types';

const OfferDetailsMap = ({offers, city}) =>
  <Map
    className="property__map"
    offers={offers}
    city={city}
  />;

OfferDetailsMap.propTypes = {
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default OfferDetailsMap;
