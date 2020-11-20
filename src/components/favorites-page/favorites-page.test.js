import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {FavoritesPage} from './favorites-page';

import {offers} from '../../__mocks__/mocks';

const mockStore = configureStore();

test(`FavoritesPage render correctly`, () => {
  const initialState = {
    DATA: {
      favoriteOffers: offers,
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      info: {}
    }
  };

  const store = mockStore(initialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesPage
              favoriteOffers={offers}
              fetchFavoriteOffersAction={() => {}}
              favoriteLoadingStatus={true}
            />
          </BrowserRouter>
        </Provider>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
