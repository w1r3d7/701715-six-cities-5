import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';

import Main from '../main-page/main-page';
import Login from '../login-page/login-page';
import Favorites from '../favorites-page/favorites-page';
import OfferDetails from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

import {RouteUrl} from '../../constants/constants';
import {browserHistory} from '../../browser-history';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path={RouteUrl.HOME} exact>
        <Main />
      </Route>
      <Route path={RouteUrl.LOGIN} exact>
        <Login />
      </Route>
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

export default App;
