import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {REVIEW_PROP_TYPES} from '../../types';
import ReviewItem from '../review-item/review-item';
import FormComment from '../form-comment/form-comment';

const EMPTY_REVIEWS = 0;

export default class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(areaText, rating) {
    const review = {
      name: `Test`,
      id: Date.now(),
      photoUrl: `/img/avatar-max.jpg`,
      reviewText: areaText,
      rating,
      date: new Date().toDateString(),
    };
    this.setState((prevState) => {
      return {
        reviews: [...prevState.reviews, review],
      };
    });
  }

  render() {
    const {reviews} = this.state;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">
          Reviews &middot;
          <span className="reviews__amount">
            {reviews ? reviews.length : EMPTY_REVIEWS}
          </span>
        </h2>
        <ul className="reviews__list">
          {
            reviews.length > EMPTY_REVIEWS
              ? reviews.map((review) => <ReviewItem review={review} key={review.id} />)
              : ``
          }
        </ul>
        <FormComment onSubmit={this.handleFormSubmit} />
      </section>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(REVIEW_PROP_TYPES).isRequired
  ).isRequired
};

