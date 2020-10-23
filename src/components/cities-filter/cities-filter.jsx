import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FilterType} from '../../constants';

const FILTER_POPUP_OPENED_CLASS = `places__options--opened`;
const ACTIVE_FILTER_ITEM_CLASS = `places__option--active`;

class CitiesFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.filterPopup = React.createRef();

    this.handleMenuOpenerClick = this.handleMenuOpenerClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  toggleFilterPopup() {
    this.filterPopup.current.classList.toggle(FILTER_POPUP_OPENED_CLASS);
  }

  handleMenuOpenerClick() {
    this.toggleFilterPopup();
  }

  handleFilterClick(evt) {
    const selectedFilter = evt.target.textContent;

    this.props.onFilterChange(selectedFilter);
    this.toggleFilterPopup();
  }

  createFilters() {
    return Object.values(FilterType).map((filter, index) => {
      const isActiveFilter = filter === this.props.currentFilter;
      return (
        <li
          key={filter + index}
          className={`places__option ${isActiveFilter ? ACTIVE_FILTER_ITEM_CLASS : ``}`}
          tabIndex="0"
          onClick={this.handleFilterClick}
        >{filter}</li>
      );
    });
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleMenuOpenerClick}>
          {this.props.currentFilter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul ref={this.filterPopup} className="places__options places__options--custom ">
          {this.createFilters()}
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
