import React from 'react';
import {REVIEW_PROPTYPES} from '../../types.js';
import {getRatingInPercentage} from '../../utils.js';

const ReviewItem = (props) => {
  const {review} = props;
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
          <img className="reviews__avatar user__avatar" src={photoUrl} width="54" height="54"
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
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: REVIEW_PROPTYPES
};

export default ReviewItem;
