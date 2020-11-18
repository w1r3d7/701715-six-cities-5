import React from 'react';
import renderer from 'react-test-renderer';

import FavoritesContainer from './favorites-container';

import {offers} from '../../__mocks__/mocks';

describe(`FavoritesContainer render correctly`, () => {
  it(`FavoriteOffers not empty`, () => {
    const tree = renderer
      .create(
          <FavoritesContainer
            favoriteOffers={offers}
            isLoaded={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoriteOffers empty`, () => {
    const tree = renderer
      .create(
          <FavoritesContainer
            favoriteOffers={[]}
            isLoaded={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
