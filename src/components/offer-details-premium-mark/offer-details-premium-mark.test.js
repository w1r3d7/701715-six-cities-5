import React from 'react';
import renderer from 'react-test-renderer';

import OfferDetailsPremiumMark from './offer-details-premium-mark';

describe(`OfferDetailsPremiumMark render correctly`, () => {
  it(`Is Premium`, () => {
    const tree = renderer
      .create(
          <OfferDetailsPremiumMark isPremium={true} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Is not Premium`, () => {
    const tree = renderer
      .create(
          <OfferDetailsPremiumMark isPremium={false} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

