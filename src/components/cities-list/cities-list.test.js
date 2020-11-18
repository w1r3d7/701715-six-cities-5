import React from 'react';
import rendrer from 'react-test-renderer';

import CitiesList from './cities-list';

const noop = () => {};

it(`CitiesList render correctly`, () => {
  const tree = rendrer
    .create(
        <CitiesList
          handleCityClick={noop}
          currentCity={`Cologne`}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
