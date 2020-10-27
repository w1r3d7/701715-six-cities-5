import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import CitiesFilterItem from '../cities-filter-item/cities-filter-item';

import {FilterType} from '../../constants';

const FILTER_POPUP_OPENED_CLASS = `places__options--opened`;
const filtersList = Object.values(FilterType);

class CitiesFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.handleMenuOpenerClick = this.handleMenuOpenerClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  changeMenuStatus(prevState) {
    return {isMenuOpen: !prevState.isMenuOpen};
  }

  handleMenuOpenerClick() {
    this.setState(this.changeMenuStatus);
  }

  handleFilterClick(evt) {
    const selectedFilter = evt.target.textContent;

    this.props.onFilterChange(selectedFilter);
    this.setState(this.changeMenuStatus);
  }


  render() {
    const {currentFilter} = this.props;
    const {isMenuOpen} = this.state;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleMenuOpenerClick}>
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
              handleFilterClick={this.handleFilterClick}
            />
          ))}
        </ul>
      </form>
    );
  }
}

CitiesFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default CitiesFilter;
