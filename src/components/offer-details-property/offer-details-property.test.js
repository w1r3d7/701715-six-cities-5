import React from 'react';
import renderer from 'react-test-renderer';

import OfferDetailsProperty from './offer-details-property';

import {offers} from '../../__mocks__/mocks';

const [offer] = offers;

test(`OfferDetailsProperty render correctly`, () => {
  const tree = renderer
    .create(
        <OfferDetailsProperty offer={offer} nearbyOffers={offers} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
