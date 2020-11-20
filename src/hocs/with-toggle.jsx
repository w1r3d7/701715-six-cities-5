import React, {PureComponent} from 'react';

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
  return WithToggle;
};


export default withToggle;
