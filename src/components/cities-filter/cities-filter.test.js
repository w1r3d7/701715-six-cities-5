import React from 'react';
import renderer from 'react-test-renderer';

import CitiesFilter from './cities-filter';
import {FilterType} from '../../__mocks__/mocks';

const props = {
  currentFilter: FilterType.POPULAR,
  isToggleOpen: true,
  onToggleClick: () => {},
  onFilterChange: () => {},
};

describe(`CitiesFilter render correctly`, () => {
  it(`CitiesFilter toggle opened`, () => {

    props.isToggleOpen = true;

    const tree = renderer
      .create(
          <CitiesFilter {...props} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesFilter toggle closed`, () => {

    props.isToggleOpen = false;

    const tree = renderer
      .create(
          <CitiesFilter {...props} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
