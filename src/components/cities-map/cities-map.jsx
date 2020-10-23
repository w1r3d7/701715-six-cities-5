import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {OFFER_PROP_TYPES} from '../../types';

const CITIES_MAP_CLASS = `cities__map`;

const CitiesMap = ({offers, city, activeCardId}) => (
  <Map
    mapType={CITIES_MAP_CLASS}
    offers={offers}
    city={city}
    activeCardId={activeCardId}
  />
);

CitiesMap.propTypes = {
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default CitiesMap;
