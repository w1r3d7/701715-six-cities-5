import React from 'react';
import rendrer from 'react-test-renderer';

import {CitiesContainer} from './cities-container';
import {offers} from '../../__mocks__/mocks';

const currentCity = `Moscow`;

describe(`CitiesContainer render correctly`, () => {
  it(`CitiesContainer offers empty`, () => {
    const tree = rendrer
      .create(
          <CitiesContainer
            offers={offers}
            isOffersEmpty={true}
            currentCity={currentCity}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesContainer have offers`, () => {
    const tree = rendrer
      .create(
          <CitiesContainer
            offers={offers}
            isOffersEmpty={false}
            currentCity={currentCity}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


