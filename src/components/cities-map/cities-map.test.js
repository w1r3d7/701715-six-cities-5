import React from 'react';
import renderer from 'react-test-renderer';

import CitiesMap from './cities-map';
import {offers} from '../../__mocks__/mocks';

test(`CitiesMap render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesMap
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
