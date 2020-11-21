import React from 'react';
import renderer from 'react-test-renderer';

import CitiesEmpty from './cities-empty';

it(`CitiesEmpty renders correctly`, () => {
  const tree = renderer
    .create(<CitiesEmpty city={`Moscow`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
