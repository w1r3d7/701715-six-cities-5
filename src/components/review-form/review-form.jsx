import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewRating from '../review-rating/review-rating';

import {RATING_COUNTS, RATING_TITLES} from '../../constants/constants.js';
import {sendReview} from '../../store/data/api-actions';
import {getError, getReviewSendStatus} from '../../store/selectors';

const FormFieldName = {
  REVIEW: `review`,
  RATING: `rating`,
};

const ReviewForm = ({
  sendReviewAction,
  offerId,
  sendReviewError,
  reviewRequestStatus
}) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const areaText = formData.get(FormFieldName.REVIEW);
    const currentRating = Number(formData.get(FormFieldName.RATING));
    const review = {
      comment: areaText,
      rating: currentRating,
    };
    evt.target.disabled = true;
    sendReviewAction(offerId, review);
    evt.target.reset();
  };

  const errorBlock = sendReviewError ? <p style={{color: `red`}}>Error `{sendReviewError}`, please try later</p> : false;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => {
          const rating = RATING_COUNTS[index];
          return (
            <ReviewRating
              key={title}
              title={title}
              rating={rating}
              isDisabled={reviewRequestStatus}
            />
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength="300"
        minLength="50"
        disabled={reviewRequestStatus ? `disabled` : ``}
      />
      {errorBlock}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={reviewRequestStatus ? `disabled` : ``}
        >Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  sendReviewAction: PropTypes.func.isRequired,
  sendReviewError: PropTypes.string,
  reviewRequestStatus: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendReviewAction: (id, review) => dispatch(sendReview(id, review))
});

const mapStateToProps = (state) => ({
  sendReviewError: getError(state),
  reviewRequestStatus: getReviewSendStatus(state),
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
