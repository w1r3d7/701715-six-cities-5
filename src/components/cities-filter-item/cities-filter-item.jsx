import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_FILTER_ITEM_CLASS = `places__option--active`;

const CitiesFilterItem = ({filter, currentFilter, handleFilterClick}) => (
  <li
    key={filter}
    className={`places__option ${filter === currentFilter ? ACTIVE_FILTER_ITEM_CLASS : ``}`}
    tabIndex="0"
    onClick={handleFilterClick}
  >
    {filter}
  </li>
);

CitiesFilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default CitiesFilterItem;
