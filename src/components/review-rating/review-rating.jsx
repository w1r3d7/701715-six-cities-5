import React from 'react';
import PropTypes from 'prop-types';

const ReviewRating = ({title, rating, isDisabled}) => {
  return (
    <React.Fragment key={title}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        required={true}
        disabled={isDisabled ? `disabled` : ``}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

ReviewRating.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ReviewRating;
