import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import OfferDetailsNearbyList from './offer-details-nearby-list';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

const mockStore = configureStore();

test(`OfferDetailsNearByList render correctly`, () => {
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
            <OfferDetailsNearbyList
              nearbyOffers={offers}
              isLoaded={true}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
