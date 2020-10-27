import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {RATING_TITLES} from '../../constants.js';
import ReviewRating from '../review-rating/review-rating';

export default class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      areaText: ``,
      currentRating: null
    };

    this.handleStarButtonActive = this.handleStarButtonActive.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleAreaChange(evt) {
    this.setState({areaText: evt.target.value});
  }

  handleStarButtonActive(evt) {
    this.setState({currentRating: evt.target.value});
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const {areaText, currentRating} = this.state;
    this.setState({
      areaText: ``,
      currentRating: null
    });
    this.props.onSubmit(areaText, currentRating);
  }

  render() {
    const {currentRating, areaText} = this.state;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RATING_TITLES.map((title, index) => (
            <ReviewRating
              key={title}
              title={title}
              index={index}
              onStarClick={this.handleStarButtonActive}
              currentRating={currentRating}
            />
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved" value={areaText} onChange={this.handleAreaChange} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
