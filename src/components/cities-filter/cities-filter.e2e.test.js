import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {CitiesFilter} from './cities-filter';
import {FilterType} from '../../__mocks__/mocks';

configure({adapter: new Adapter()});

test(`CitiesFilter, click on "Filter" button`, () => {
  const onFilterClick = jest.fn();

  const wrapper = shallow(
      <CitiesFilter
        isToggleOpen={false}
        currentFilter={FilterType.POPULAR}
        onToggleClick={onFilterClick}
        onFilterChange={() => {}}
      />
  );

  wrapper.find(`.places__sorting-type`).simulate(`click`);
  expect(onFilterClick).toHaveBeenCalledTimes(1);
});
