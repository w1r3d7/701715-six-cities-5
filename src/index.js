import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import {fetchOffers} from './store/data';
import {store} from './store/store';


store.dispatch(fetchOffers());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
