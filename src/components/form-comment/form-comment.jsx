import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class FormComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      areaText: ``,
      rating: null,
      inputChecked: ``
    };

    this._handleStarButtonActive = this._handleStarButtonActive.bind(this);
    this._handleAreaChange = this._handleAreaChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleAreaChange(evt) {
    this.setState({areaText: evt.target.value});
  }

  _handleStarButtonActive(evt) {
    this.setState({
      rating: evt.target.value,
      inputChecked: evt.target.id,
    });
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {areaText, rating} = this.state;
    this.setState({
      areaText: ``,
      inputChecked: ``,
    });
    this.props.onSubmit(areaText, rating);
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating"
            value="5" id="5-stars" type="radio" onChange={this._handleStarButtonActive} checked={this.state.inputChecked === `5-stars`}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating"
            value="4" id="4-stars" type="radio" onChange={this._handleStarButtonActive} checked={this.state.inputChecked === `4-stars`}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating"
            value="3" id="3-stars" type="radio" onChange={this._handleStarButtonActive} checked={this.state.inputChecked === `3-stars`}/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating"
            value="2" id="2-stars" type="radio" onChange={this._handleStarButtonActive} checked={this.state.inputChecked === `2-stars`}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating"
            value="1" id="1-star" type="radio" onChange={this._handleStarButtonActive} checked={this.state.inputChecked === `1-stars`}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved" value={this.state.areaText} onChange={this._handleAreaChange}/>
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
