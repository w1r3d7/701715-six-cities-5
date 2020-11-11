import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list';


const ReviewsContainer = ({offerId}) => {


  return (
    <h1>{offerId}</h1>
  );
};

ReviewsContainer.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default ReviewsContainer;
