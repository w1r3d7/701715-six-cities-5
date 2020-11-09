import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app';
import {reducer} from './store/reducer';
import {createApi} from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchOffers} from './store/api-actions';


const api = createApi();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(api)
        )
    )
);

store.dispatch(fetchOffers());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
