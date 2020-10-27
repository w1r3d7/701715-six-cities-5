import React from 'react';
import PropTypes from 'prop-types';

import {RATING_COUNT} from '../../constants';

const ReviewRating = ({title, index, onStarClick, currentRating}) => {
  const rating = RATING_COUNT[index];
  return (
    <React.Fragment key={title + index}>
      <input
        className="form__rating-input visually-hidden" name="rating"
        value={rating} id={`${rating}-stars`} type="radio"
        onChange={onStarClick}
        checked={rating === currentRating}
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
  index: PropTypes.number.isRequired,
  onStarClick: PropTypes.func.isRequired,
  currentRating: PropTypes.string,
};

export default ReviewRating;
