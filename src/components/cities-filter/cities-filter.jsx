import React from 'react';
import PropTypes from 'prop-types';
import {FilterType} from '../../constants';

const FILTER_POPUP_OPENED_CLASS = `places__options--opened`;
const ACTIVE_FILTER_ITEM_CLASS = `places__option--active`;

const CitiesFilter = ({currentFilter, onFilterChange}) => {
  const filterPopup = React.createRef();

  const toggleFilterPopup = () => {
    filterPopup.current.classList.toggle(FILTER_POPUP_OPENED_CLASS);
  };

  const handleMenuOpenerClick = () => {
    toggleFilterPopup();
  };

  const handleFilterClick = (evt) => {
    const selectedFilter = evt.target.textContent;

    onFilterChange(selectedFilter);
    toggleFilterPopup();
  };

  const createFilters = () => {
    return Object.values(FilterType).map((filter, index) => {
      const isActiveFilter = filter === currentFilter;
      return (
        <li
          key={filter + index}
          className={`places__option ${isActiveFilter ? ACTIVE_FILTER_ITEM_CLASS : ``}`}
          tabIndex="0"
          onClick={handleFilterClick}
        >{filter}</li>
      );
    });
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleMenuOpenerClick}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul ref={filterPopup} className="places__options places__options--custom ">
        {createFilters()}
      </ul>
    </form>
  );
};


CitiesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default CitiesFilter;
