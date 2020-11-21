import React from 'react';
import renderer from 'react-test-renderer';

import ReviewRating from './review-rating';

const title = `perfect`;
const rating = `5`;

describe(`ReviewRating render correctly`, () => {
  it(`Disable ReviewRating`, () => {
    const tree = renderer
      .create(
          <ReviewRating
            rating={rating}
            isDisabled={true}
            title={title}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Enable ReviewRating`, () => {
    const tree = renderer
      .create(
          <ReviewRating
            rating={rating}
            isDisabled={false}
            title={title}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

