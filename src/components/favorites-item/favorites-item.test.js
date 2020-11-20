import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import FavoritesItem from './favorites-item';

import {AuthorizationStatus, FilterType, offers} from '../../__mocks__/mocks';


const mockStore = configureStore();

test(`FavoritesItem render correctly`, () => {

  const initialState = {
    APP: {
      currentFilter: FilterType.POPULAR,
      onFilterChange: () => {},

    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  };
  const store = mockStore(initialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesItem
              city="Cologne"
              offers={offers}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
