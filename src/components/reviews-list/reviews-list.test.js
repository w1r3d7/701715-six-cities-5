import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {ReviewsList} from './reviews-list';

import {AuthorizationStatus, reviews} from '../../__mocks__/mocks';

const mockStore = configureStore();

test(`ReviewsList render correctly`, () => {
  const initialState = {
    DATA: {
      reviews,
      isReviewRequestSend: true,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  };
  const store = mockStore(initialState);


  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewsList
            reviews={reviews}
            authStatus={AuthorizationStatus.AUTH}
            offerId={1}
            isLoaded={true}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
