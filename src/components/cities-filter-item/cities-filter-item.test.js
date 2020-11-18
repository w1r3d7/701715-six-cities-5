import React from 'react';
import renderer from 'react-test-renderer';

import CitiesFilterItem from './cities-filter-item';

import {FilterType} from '../../__mocks__/mocks';

const noop = () => {};

describe(`CitiesFilterItem render currently`, () => {
  it(`CitiesFilterItem match CurrentFilter`, () => {
    const tree = renderer
      .create(
          <CitiesFilterItem
            filter={FilterType.POPULAR}
            currentFilter={FilterType.POPULAR}
            handleFilterClick={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesFilterItem not match CurrentFilter`, () => {
    const tree = renderer
      .create(
          <CitiesFilterItem
            filter={FilterType.POPULAR}
            currentFilter={FilterType.PRICE_HIGH_TO_LOW}
            handleFilterClick={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

