import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {OFFER_PROP_TYPES} from '../../types.js';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardHover(id) {
    this.setState((prevState) => prevState.activeCardId === id ? null : {activeCardId: id});

    this.props.onHoverCard(id);
  }

  handleCardClick(id) {
    this.props.onOfferClick(id);
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            offer={offer}
            key={offer.id}
            onCardHover={this.handleCardHover}
            onCardClick={this.handleCardClick}/>
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  onHoverCard: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default OfferList;
