import React from 'react';
import Loading from '../components/loading/loading';

const errorStyle = {
  color: `red`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `100%`,
};

const withLoading = (Component) => (props) => {
  const {isLoaded, error} = props;
  const fallbackComponent = error
    ? <div style={errorStyle}>
      <span>Error, please try later! Error message - {error}</span>
    </div>
    : <Loading />;
  return isLoaded ? <Component {...props} /> : fallbackComponent;
};

export default withLoading;
