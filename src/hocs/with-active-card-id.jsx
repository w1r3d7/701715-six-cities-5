import React, {PureComponent} from 'react';

const withActiveCardId = (Component) => {
  class WithActiveCardId extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: null,
      };

      this.handleCardHover = this.handleCardHover.bind(this);
    }

    handleCardHover(activeCardId) {
      this.setState((prevState) => (
        prevState.activeCardId === activeCardId
          ? null
          : {activeCardId})
      );
    }

    render() {
      const {activeCardId} = this.state;

      return (
        <Component
          activeCardId={activeCardId}
          onCardHover={this.handleCardHover}
          {...this.props}
        />
      );
    }
  }

  return WithActiveCardId;
};


export default withActiveCardId;
