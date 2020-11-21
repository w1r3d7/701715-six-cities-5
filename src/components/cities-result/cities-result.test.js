import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import CitiesResult from './cities-result';
import {AuthorizationStatus, FilterType, info, offers} from '../../__mocks__/mocks';


const mockStore = configureStore();

test(`CitiesResult render correctly`, () => {
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
            <CitiesResult
              city={`Cologne`}
              offers={offers}
            />
          </BrowserRouter>
        </Provider>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
