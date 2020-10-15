import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {RATING_TITLES, RATING_COUNT} from '../../const.js';

const getRatingTemplate = (title, index, handleStarChange, currentRating) => {
  const rating = RATING_COUNT[index];
  return (
    <React.Fragment key={title}>
      <input className="form__rating-input visually-hidden" name="rating"
        value={rating} id={`${rating}-stars`} type="radio"
        onChange={handleStarChange}
        checked={rating === currentRating}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

export default class FormComment extends PureComponent {
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
    this.setState({
      currentRating: evt.target.value,
    });
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
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RATING_TITLES.map((title, index) => getRatingTemplate(title, index, this.handleStarButtonActive, this.state.currentRating))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved" value={this.state.areaText} onChange={this.handleAreaChange} />
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

FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
