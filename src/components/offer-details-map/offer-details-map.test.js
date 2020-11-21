import React from 'react';
import renderer from 'react-test-renderer';

import OfferDetailsMap from './offer-details-map';

import {offers} from '../../__mocks__/mocks';

test(`OfferDetailsMap render correctly`, () => {
  const tree = renderer
    .create(
        <OfferDetailsMap offers={offers} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
