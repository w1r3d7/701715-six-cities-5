import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import withReviews from '../../hocs/with-reviews';

import {REVIEW_PROP_TYPES} from '../../types';

const EMPTY_REVIEWS = 0;

const ReviewsList = ({reviews, onFormSubmit}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
          Reviews &middot;
        <span className="reviews__amount">
          {reviews.length || EMPTY_REVIEWS}
        </span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.length > EMPTY_REVIEWS
            &&
          reviews.map((review) => <ReviewItem review={review} key={review.id} />)
        }
      </ul>
      <ReviewForm onSubmit={onFormSubmit} />
    </section>
  );

};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(REVIEW_PROP_TYPES).isRequired
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export {ReviewsList};
export default withReviews(ReviewsList);
