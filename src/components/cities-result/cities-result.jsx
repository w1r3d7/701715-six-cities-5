import React, {PureComponent} from 'react';
import OfferList from '../offer-list/offer-list';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import OfferMap from '../offer-map/offer-map';

class CitiesResult extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(activeCardId) {
    this.setState((prevState) => prevState.activeCard === activeCardId ? null : {activeCard: activeCardId});
  }

  render() {
    const {placesCount, city, offers, onOfferClick} = this.props;
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {city}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex="0">
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom ">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <OfferList offers={offers} onOfferClick={onOfferClick} onHoverCard={this.handleCardHover} />
        </section>
        <div className="cities__right-section">
          <OfferMap city={city} offers={offers} activeCardId={this.state.activeCardId}/>
        </div>
      </div>
    );
  }
}

CitiesResult.propTypes = {
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  placesCount: PropTypes.number.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default CitiesResult;
