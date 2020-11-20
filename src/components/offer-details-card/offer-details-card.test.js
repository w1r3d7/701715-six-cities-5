import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import OfferDetailsCard from './offer-details-card';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

const [offer] = offers;
const mockStore = configureStore();

test(`OfferDetailsCard render correctly`, () => {
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
            <OfferDetailsCard
              offer={offer}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
