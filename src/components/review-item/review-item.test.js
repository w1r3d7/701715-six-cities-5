import React from 'react';
import renderer from 'react-test-renderer';

import ReviewItem from './review-item';

import {reviews} from '../../__mocks__/mocks';

const [review] = reviews;

test(`ReviewItem render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem review={review} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});


