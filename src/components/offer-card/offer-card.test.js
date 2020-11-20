import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import OfferCard from './offer-card';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

const noop = () => {};
const [offer] = offers;
const mockStore = configureStore();

test(`OfferCard render correctly`, () => {
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
            <OfferCard
              onCardHover={noop}
              offer={offer}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
