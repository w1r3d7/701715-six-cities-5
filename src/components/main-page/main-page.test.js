import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import MainPage from './main-page';
import {AuthorizationStatus, FilterType, offers, info} from '../../__mocks__/mocks';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();


test(`MainPage render correctly`, () => {
  const initialState = {
    APP: {
      currentFilter: FilterType.POPULAR,
      onFilterChange: () => {},
      currentCity: `Cologne`,
    },
    DATA: {
      offers,
      isOffersLoaded: true
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      info
    }
  };
  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
