import React from 'react';
import PropTypes from 'prop-types';

import CitiesFilterItem from '../cities-filter-item/cities-filter-item';
import withToggleMenu from '../../hocs/with-toggle-menu';

import {FilterType} from '../../constants';

const FILTER_POPUP_OPENED_CLASS = `places__options--opened`;
const filtersList = Object.values(FilterType);

const CitiesFilter = (props) => {
  const {currentFilter, isMenuOpen, onMenuClick, onFilterChange} = props;

  const handleFilterClick = (evt) => {
    const selectedFilter = evt.target.textContent;
    onFilterChange(selectedFilter);
    onMenuClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onMenuClick}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isMenuOpen ? FILTER_POPUP_OPENED_CLASS : ``}`}>
        {filtersList.map((filter) => (
          <CitiesFilterItem
            key={filter}
            filter={filter}
            currentFilter={currentFilter}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </ul>
    </form>
  );
};

CitiesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default withToggleMenu(CitiesFilter);
