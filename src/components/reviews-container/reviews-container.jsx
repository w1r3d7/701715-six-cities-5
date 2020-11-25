import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';

import {fetchReviews} from '../../store/data/api-actions';
import {getSortedReviews, getReviewsLoadingStatus, getReviewsError} from '../../store/selectors';
import {REVIEW_PROP_TYPES} from '../../types';


const ReviewsContainer = (props) => {
  const {
    reviews,
    isReviewsLoaded,
    offerId,
    getReviewsList,
    reviewsError
  } = props;

  useEffect(() => {
    getReviewsList(offerId);
  }, []);

  return (
    <ReviewsList
      offerId={offerId}
      isLoaded={isReviewsLoaded}
      reviews={reviews}
      error={reviewsError}
    />
  );
};

ReviewsContainer.propTypes = {
  offerId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(REVIEW_PROP_TYPES).isRequired
  ),
  isReviewsLoaded: PropTypes.bool.isRequired,
  getReviewsList: PropTypes.func.isRequired,
  reviewsError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  reviews: getSortedReviews(state),
  isReviewsLoaded: getReviewsLoadingStatus(state),
  reviewsError: getReviewsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviewsList: (id) => dispatch(fetchReviews(id))
});

export {ReviewsContainer};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
