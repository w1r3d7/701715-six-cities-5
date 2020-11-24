import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {OfferDetailsProperty} from './offer-details-property';

import {AuthorizationStatus, offers, reviews} from '../../__mocks__/mocks';

const [offer] = offers;

const noop = () => {};
const mockStore = configureStore();

test(`OfferDetailsProperty render correctly`, () => {
  const initialState = {
    DATA: {
      reviews,
      isReviewRequestSend: true,
      isReviewsLoaded: true,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  };
  const store = mockStore(initialState);

  const tree = renderer
    .create(
        <Provider store={store} >
          <OfferDetailsProperty
            offer={offer}
            nearbyOffers={offers}
            changeFavoriteStatusAction={noop}
            authStatus={AuthorizationStatus.AUTH}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
