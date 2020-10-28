import React from 'react';
import PropTypes from 'prop-types';

import {RATING_TITLES} from '../../constants.js';
import ReviewRating from '../review-rating/review-rating';

const FormFieldType = {
  REVIEW: `review`,
  RATING: `rating`,
};

const ReviewForm = ({onSubmit}) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const areaText = formData.get(FormFieldType.REVIEW);
    const currentRating = formData.get(FormFieldType.RATING);
    onSubmit(areaText, currentRating);
    evt.target.reset();
  };
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => (
          <ReviewRating
            key={title}
            title={title}
            index={index}
          />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;
