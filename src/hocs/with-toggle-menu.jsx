import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withToggleMenu = (Component) => {
  class WithToggleMenu extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMenuOpen: false,
      };

      this.handleMenuToggleClick = this.handleMenuToggleClick.bind(this);
    }
    changeMenuStatus(prevState) {
      return {isMenuOpen: !prevState.isMenuOpen};
    }

    handleMenuToggleClick() {
      this.setState(this.changeMenuStatus);
    }

    render() {
      return (
        <Component
          isMenuOpen={this.state.isMenuOpen}
          onMenuClick={this.handleMenuToggleClick}
          {...this.props}
        />
      );
    }
  }

  WithToggleMenu.propTypes = {
    currentFilter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  return WithToggleMenu;
};


export default withToggleMenu;
