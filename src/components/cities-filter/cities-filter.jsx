import React from 'react';
import PropTypes from 'prop-types';

import CitiesFilterItem from '../cities-filter-item/cities-filter-item';
import withToggle from '../../hocs/with-toggle';

import {FilterType} from '../../constants/constants';

const FILTER_POPUP_OPENED_CLASS = `places__options--opened`;
const filtersList = Object.values(FilterType);

const CitiesFilter = ({
  currentFilter,
  isToggleOpen,
  onToggleClick,
  onFilterChange
}) => {
  const handleFilterClick = (selectedFilter) => () => {
    onFilterChange(selectedFilter);
    onToggleClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onToggleClick}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isToggleOpen ? FILTER_POPUP_OPENED_CLASS : ``}`}>
        {filtersList.map((filter) => (
          <CitiesFilterItem
            key={filter}
            filter={filter}
            currentFilter={currentFilter}
            handleFilterClick={handleFilterClick(filter)}
          />
        ))}
      </ul>
    </form>
  );
};

CitiesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isToggleOpen: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

export default withToggle(CitiesFilter);
