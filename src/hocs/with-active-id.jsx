import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {OFFER_PROP_TYPES} from '../types';

const withActiveId = (Component) => {
  class WithActiveId extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: null,
      };

      this.handleCardHover = this.handleCardHover.bind(this);
    }

    handleCardHover(activeCardId) {
      this.setState((prevState) => (
        prevState.activeCardId === activeCardId
          ? null
          : {activeCardId})
      );
    }

    render() {
      const {activeCardId} = this.state;

      return (
        <Component
          activeCardId={activeCardId}
          onCardHover={this.handleCardHover}
          {...this.props}
        />
      );
    }
  }

  WithActiveId.propTypes = {
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

  return WithActiveId;
};


export default withActiveId;
