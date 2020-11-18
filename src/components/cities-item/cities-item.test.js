import React from 'react';
import rerender from 'react-test-renderer';

import CitiesItem from './cities-item';

const noop = () => {};

describe(`CitiesItem render currently`, () => {
  it(`CitiesItem match currentCity`, () => {
    const tree = rerender
      .create(
          <CitiesItem
            city={`Moscow`}
            onCityClick={noop}
            currentCity={`Moscow`}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesItem not match currentCity`, () => {
    const tree = rerender
      .create(
          <CitiesItem
            city={`Moscow`}
            onCityClick={noop}
            currentCity={`New York`}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
