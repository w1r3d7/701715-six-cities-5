import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import FavoritesContainer from './favorites-container';

import {AuthorizationStatus, FilterType, offers} from '../../__mocks__/mocks';

const mockStore = configureStore();

describe(`FavoritesContainer render correctly`, () => {
  it(`FavoriteOffers not empty`, () => {
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
              <FavoritesContainer
                favoriteOffers={offers}
                isLoaded={true}
              />
            </BrowserRouter>
          </Provider>

      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteOffers empty`, () => {
    const tree = renderer
      .create(
          <FavoritesContainer
            favoriteOffers={[]}
            isLoaded={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
