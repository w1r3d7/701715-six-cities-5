import React from 'react';
import PropTypes from 'prop-types';

import CitiesItem from '../cities-item/cities-item';

import {CityName} from '../../constants/constants';

const citiesList = Object.values(CityName);

const CitiesList = ({currentCity, handleCityClick}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList.map((city) => (
          <CitiesItem
            key={city}
            city={city}
            currentCity={currentCity}
            onCityClick={handleCityClick}
          />
        ))}
      </ul>
    </section>
  </div>
);

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
