import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {REVIEW_PROP_TYPES} from '../types';

const withReviews = (Component) => {
  class WithReviews extends PureComponent {
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
      return (
        <Component {...this.props} reviews={this.state.reviews} onFormSubmit={this.handleFormSubmit} />
      );
    }
  }

  WithReviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape(REVIEW_PROP_TYPES).isRequired
    ).isRequired,
  };

  return WithReviews;
};

export default withReviews;
