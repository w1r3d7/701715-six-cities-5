import {createApi} from '../services/api';
import {applyMiddleware, createStore} from 'redux';
import reducer from './root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const api = createApi();

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(api)
        )
    )
);
