import React from 'react';
import PropTypes from 'prop-types';

import CitiesEmpty from '../cities-empty/cities-empty';
import CitiesResult from '../cities-result/cities-result';
import withLoading from '../../hocs/with-loading';

import {OFFER_PROP_TYPES} from '../../types';

const CitiesContainer = ({
  isOffersEmpty,
  currentCity,
  offers,
}) => {
  return (
    isOffersEmpty
      ?
      <CitiesEmpty
        city={currentCity} />
      :
      <CitiesResult
        city={currentCity}
        offers={offers}/>
  );
};

CitiesContainer.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  isOffersEmpty: PropTypes.bool.isRequired,
};

export {CitiesContainer};
export default withLoading(CitiesContainer);
