import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offers} from '../../__mocks__/mocks';

test(`Map render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          mapType={`property__map`}
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
