import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withToggle = (Component) => {
  class WithToggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isToggleOpen: false,
      };

      this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
      this.setState((prevState) => {
        return {isToggleOpen: !prevState.isToggleOpen};
      });
    }

    render() {
      return (
        <Component
          isToggleOpen={this.state.isToggleOpen}
          onToggleClick={this.handleToggleClick}
          {...this.props}
        />
      );
    }
  }

  WithToggle.propTypes = {
    currentFilter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  return WithToggle;
};


export default withToggle;
