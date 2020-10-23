import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import OfferDetails from '../offer-details/offer-details';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={({history}) => (
          <Main onOfferClick={(id) => history.push(`/offer/${id}`)} />
        )}
      />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>
      <Route path="/offer/:id" exact>
        <OfferDetails />
      </Route>
      <Route>
        <Link to="/">Page Not Found, back to main page</Link>
      </Route>
    </Switch>
  </Router>
);

export default App;
