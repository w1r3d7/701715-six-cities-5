import React from 'react';
import PropTypes from 'prop-types';

import {REVIEW_PROP_TYPES} from '../../types.js';
import {formatDate, getRatingInPercentage} from '../../utils.js';

const ReviewItem = ({review}) => {
  const {
    name,
    photoUrl,
    reviewText,
    rating,
    date,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={photoUrl}
            width="54"
            height="54"
            alt={`Avatar ${name}`} />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercentage(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate(date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape(REVIEW_PROP_TYPES).isRequired,
};

export default ReviewItem;
