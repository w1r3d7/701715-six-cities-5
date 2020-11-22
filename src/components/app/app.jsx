import React from 'react';
import {Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../main-page/main-page';
import Login from '../login-page/login-page';
import Favorites from '../favorites-page/favorites-page';
import OfferDetails from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

import {RouteUrl, AuthorizationStatus} from '../../constants/constants';
import {browserHistory} from '../../browser-history';
import {getAuthStatus} from '../../store/selectors';

const App = ({authorizationStatus}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route path={RouteUrl.HOME} exact>
        <Main />
      </Route>
      <Route
        path={RouteUrl.LOGIN}
        exact
        render={() => (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Redirect to={RouteUrl.HOME} />
            : <Login />
        )}
      />
      <PrivateRoute
        exact
        path={RouteUrl.FAVORITES}
        render={
          () => {
            return (<Favorites />);
          }}
      />
      <Route path={RouteUrl.OFFER_ID} exact component={OfferDetails} />
      <Route>
        <Link to={RouteUrl.HOME}>Page Not Found, back to main page</Link>
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

export default connect(mapStateToProps)(App);
