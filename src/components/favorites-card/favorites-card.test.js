import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoritesCard from './favorites-card';

import {offers} from '../../__mocks__/mocks';

const [offer] = offers;

test(`FavoriteCard render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesCard offer={offer} />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
