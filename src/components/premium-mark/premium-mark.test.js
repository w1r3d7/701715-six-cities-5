import React from 'react';
import renderer from 'react-test-renderer';

import PremiumMark from './premium-mark';

const cardType = `place-card`;

describe(`PremiumMark render correctly`, () => {
  it(`It is premium`, () => {
    const tree = renderer
      .create(
          <PremiumMark
            cardType={cardType}
            isPremium={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`It isn't premium`, () => {
    const tree = renderer
      .create(
          <PremiumMark
            cardType={cardType}
            isPremium={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

