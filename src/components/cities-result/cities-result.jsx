import React, {PureComponent} from 'react';
import OfferList from '../offer-list/offer-list';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types.js';
import CitiesMap from '../cities-map/cities-map';
import CitiesFilter from '../cities-filter/cities-filter';
import {FilterType} from '../../const';
import {getOffersByFilter} from '../../utils';

class CitiesResult extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null,
      offers: this.props.offers,
      currentFilter: FilterType.POPULAR,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleCardHover(activeCardId) {
    this.setState((prevState) => prevState.activeCardId === activeCardId ? null : {activeCardId});
  }

  handleFilterChange(selectedFilter) {
    this.setState((prevState) => {
      return prevState.currentFilter === selectedFilter
        ?
        null
        :
        {currentFilter: selectedFilter};
    });
  }

  render() {
    const {placesCount, city, offers, onOfferClick} = this.props;
    const filteredOffers = this.state.currentFilter === FilterType.POPULAR
      ?
      offers
      :
      getOffersByFilter(offers, this.state.currentFilter);

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {city}</b>
          <CitiesFilter onFilterChange={this.handleFilterChange} currentFilter={this.state.currentFilter}/>
          <OfferList offers={filteredOffers} onOfferClick={onOfferClick} onHoverCard={this.handleCardHover} />
        </section>
        <div className="cities__right-section">
          <CitiesMap city={city} offers={filteredOffers} activeCardId={this.state.activeCardId}/>
        </div>
      </div>
    );
  }
}

CitiesResult.propTypes = {
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default CitiesResult;
