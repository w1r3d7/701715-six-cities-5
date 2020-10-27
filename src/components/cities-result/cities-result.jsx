import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OfferList from '../offer-list/offer-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesFilter from '../cities-filter/cities-filter';

import {OFFER_PROP_TYPES} from '../../types.js';
import {getOffersByCityAndFilter} from '../../utils';
import {actions} from '../../store/actions';

class CitiesResult extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleCardHover(activeCardId) {
    this.setState((prevState) => (
      prevState.activeCardId === activeCardId
        ? null
        : {activeCardId})
    );
  }

  handleFilterChange(selectedFilter) {
    const {onFilterChange, offers, city, currentFilter} = this.props;
    if (currentFilter !== selectedFilter) {
      onFilterChange(offers, city, selectedFilter);
    }
  }

  render() {
    const {
      placesCount,
      city,
      filteredOffers,
      onOfferClick,
      currentFilter
    } = this.props;
    const {activeCardId} = this.state;

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {city}</b>
          <CitiesFilter onFilterChange={this.handleFilterChange} currentFilter={currentFilter} />
          <OfferList
            offers={filteredOffers}
            onOfferClick={onOfferClick}
            onHoverCard={this.handleCardHover}
          />
        </section>
        <div className="cities__right-section">
          <CitiesMap city={city} offers={filteredOffers} activeCardId={activeCardId} />
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
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filteredOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  placesCount: state.filteredOffers.length,
  offers: state.offers,
  filteredOffers: state.filteredOffers,
  currentFilter: state.currentFilter,
});

const mapDispatchToProps = (dispatch) => {
  const onFilterChange = bindActionCreators(actions.changeFilter, dispatch);
  return {onFilterChange: (offers, city, currentFilter) => {
    const filteredOffers = getOffersByCityAndFilter(offers, city, currentFilter);
    return onFilterChange(currentFilter, filteredOffers);
  }};
};


export {CitiesResult};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesResult);
