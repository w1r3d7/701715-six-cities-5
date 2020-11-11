import React from 'react';
import Loading from '../components/loading/loading';

export const withLoading = (Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Loading />;
};
