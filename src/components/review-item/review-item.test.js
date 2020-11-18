import React from 'react';
import renderer from 'react-test-renderer';

import ReviewItem from './review-item';

import {review} from '../../__mocks__/mocks';

test(`ReviewItem render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem review={review} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});


