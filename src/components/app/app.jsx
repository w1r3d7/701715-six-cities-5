import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';

import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import OfferDetails from '../../pages/offer';
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
