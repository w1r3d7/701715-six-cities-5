import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import OfferList from './offer-list';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

const mockStore = configureStore();
const noop = () => {};

test(`OfferList render correctly`, () => {
  const initialState = {
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  };

  const store = mockStore(initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferList
              offers={offers}
              onHoverCard={noop}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
