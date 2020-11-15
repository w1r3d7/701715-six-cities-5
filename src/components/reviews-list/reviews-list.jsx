import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';

import {REVIEW_PROP_TYPES} from '../../types';
import {withLoading} from '../../hocs/with-loading';
import {getAuthStatus} from '../../store/selectors';
import {AuthorizationStatus} from '../../constants';

const EMPTY_REVIEWS = 0;

const ReviewsList = ({reviews, authStatus, offerId}) => {
  const isLoggedIn = authStatus === AuthorizationStatus.AUTH;
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
      {isLoggedIn && <ReviewForm offerId={offerId} />}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(REVIEW_PROP_TYPES).isRequired
  ).isRequired,
  authStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {ReviewsList};
export default compose(
    withLoading,
    connect(mapStateToProps)
)(ReviewsList);
