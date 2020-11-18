import React from 'react';
import renderer from 'react-test-renderer';

import FavoritesResult from './favorites-result';

import {offers} from '../../__mocks__/mocks';

test(`FavoritesResult render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesResult favoriteOffers={offers} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
