import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';


const App = ({placesCount}) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main placesCount={placesCount} />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/offer/:id" exact>
          <Property />
        </Route>
        <Route>
          <Link to="/">Page Not Found, back to main page</Link>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired
};

export default App;
