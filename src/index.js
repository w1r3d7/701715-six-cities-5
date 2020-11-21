import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import {fetchOffers} from './store/data/api-actions';
import {store} from './store/store';
import {checkAuth} from './store/user/api-actions';


Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth())
]).then(() => {
  ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
}
);


