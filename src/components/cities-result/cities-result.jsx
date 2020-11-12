import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';

import OfferList from '../offer-list/offer-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesFilter from '../cities-filter/cities-filter';

import {OFFER_PROP_TYPES} from '../../types.js';
import {changeFilter} from '../../store/app/actions';
import withActiveCardId from '../../hocs/with-active-card-id';
import {getCurrentFilter} from '../../store/selectors';

const CitiesResult = ({
  offers,
  city,
  onOfferClick,
  currentFilter,
  onCardHover,
  activeCardId,
  onFilterChange,
}) => {
  const handleFilterChange = (selectedFilter) => {
    if (currentFilter !== selectedFilter) {
      onFilterChange(selectedFilter);
    }
  };

  const placesCount = offers.length;


  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {city}</b>
        <CitiesFilter onFilterChange={handleFilterChange} currentFilter={currentFilter} />
        <OfferList
          offers={offers}
          onOfferClick={onOfferClick}
          onHoverCard={onCardHover}
        />
      </section>
      <div className="cities__right-section">
        <CitiesMap
          offers={offers}
          activeCardId={activeCardId}
        />
      </div>
    </div>
  );
};

CitiesResult.propTypes = {
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
  activeCardId: PropTypes.number,
  onCardHover: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilter: getCurrentFilter(state),
});

const mapDispatchToProps = (dispatch) => {
  const onFilterChange = bindActionCreators(changeFilter, dispatch);
  return {onFilterChange: (currentFilter) => onFilterChange(currentFilter)};
};

export {CitiesResult};
export default compose(connect(mapStateToProps, mapDispatchToProps), withActiveCardId)(CitiesResult);
