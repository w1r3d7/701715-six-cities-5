import React from 'react';
import PropTypes from 'prop-types';

import Map from '../map/map';

import {OFFER_PROP_TYPES} from '../../types';

const OfferDetailsMap = ({offers}) => (
  <Map
    mapType="property__map"
    offers={offers}
  />
);

OfferDetailsMap.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default OfferDetailsMap;
