import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';

import {fetchReviews} from '../../store/data/actions';
import {getReviews, getReviewsLoadingStatus} from '../../store/selectors';
import {REVIEW_PROP_TYPES} from '../../types';


class ReviewsContainer extends PureComponent {
  componentDidMount() {
    const {offerId, getReviewsList} = this.props;

    getReviewsList(offerId);
  }


  render() {
    const {
      reviews,
      isReviewsLoaded
    } = this.props;

    return (
      <ReviewsList
        isLoaded={isReviewsLoaded}
        reviews={reviews}
      />
    );
  }
}

ReviewsContainer.propTypes = {
  offerId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(REVIEW_PROP_TYPES).isRequired
  ),
  isReviewsLoaded: PropTypes.bool.isRequired,
  getReviewsList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isReviewsLoaded: getReviewsLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviewsList: (id) => dispatch(fetchReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
