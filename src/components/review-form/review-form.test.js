import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewForm} from './review-form';

const noop = () => {};

describe(`ReviewForm render correctly`, () => {
  it(`ReviewForm with error`, () => {
    const props = {
      offerId: 1,
      sendReviewAction: noop,
      reviewRequestStatus: false,
      sendReviewError: `404`,
    };

    const tree = renderer
      .create(
          <ReviewForm {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewForm without error`, () => {
    const props = {
      offerId: 1,
      sendReviewAction: noop,
      reviewRequestStatus: false,
    };

    const tree = renderer
      .create(
          <ReviewForm {...props} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


