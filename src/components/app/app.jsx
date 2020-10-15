import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import OfferDetails from '../offer-details/offer-details';
import {OFFER_PROP_TYPES} from '../../types.js';


const App = ({offers}) => (
  <Router>
    <Switch>
      <Route path="/" exact
        render={({history}) => (
          <Main offers={offers} onOfferClick={(id) => history.push(`/offer/${id}`)} />
        )} />
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites offers={offers} />
      </Route>
      <Route path="/offer/:id" exact>
        <OfferDetails offers={offers} />
      </Route>
      <Route>
        <Link to="/">Page Not Found, back to main page</Link>
      </Route>
    </Switch>
  </Router>
);

App.defaultProps = {
  offers: []
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default App;
