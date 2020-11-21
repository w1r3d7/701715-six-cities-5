import React from 'react';
import Loading from '../components/loading/loading';

const withLoading = (Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Loading />;
};

export default withLoading;
