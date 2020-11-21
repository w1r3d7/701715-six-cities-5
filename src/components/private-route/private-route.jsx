import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import {AuthorizationStatus} from '../../constants/constants';
import {getAuthStatus} from '../../store/selectors';

const PrivateRoute = ({
  path,
  exact,
  authorizationStatus,
  render
}) => (
  <Route
    path={path}
    exact={exact}
    render={(routeProps) => (
      authorizationStatus === AuthorizationStatus.AUTH
        ? render(routeProps)
        : <Redirect to={`/`} />
    )}
  />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
