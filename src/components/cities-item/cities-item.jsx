import React from 'react';
import PropTypes from 'prop-types';

const LOCATIONS_ITEM_ACTIVE_CLASS = `tabs__item--active`;

const CitiesItem = ({city, currentCity, onCityClick}) => {
  const isActiveItem = city === currentCity;
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActiveItem ? LOCATIONS_ITEM_ACTIVE_CLASS : ``}`}
        href="#"
        onClick={onCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesItem;
