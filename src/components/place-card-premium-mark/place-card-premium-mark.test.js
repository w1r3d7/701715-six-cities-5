import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCardPremiumMark from './place-card-premium-mark';

describe(`PlaceCardPremiumMark render correctly`, () => {
  it(`It is premium`, () => {
    const tree = renderer
      .create(
          <PlaceCardPremiumMark
            isPremium={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`It isn't premium`, () => {
    const tree = renderer
      .create(
          <PlaceCardPremiumMark
            isPremium={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
