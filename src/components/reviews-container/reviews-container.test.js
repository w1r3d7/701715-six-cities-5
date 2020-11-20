import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {ReviewsContainer} from './reviews-container';

import {AuthorizationStatus, reviews} from '../../__mocks__/mocks';

const mockStore = configureStore();
const noop = () => {};

test(`ReviewsContainer render correctly`, () => {
  const initialState = {
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
    DATA: {
      reviews,
      isReviewsLoaded: true,
      isReviewRequestSend: true,
    }
  };

  const store = mockStore(initialState);

  const tree = renderer
    .create(
        <Provider store={store} >
          <ReviewsContainer
            offerId={1}
            getReviewsList={noop}
            isReviewsLoaded={true}
            reviews={reviews}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
