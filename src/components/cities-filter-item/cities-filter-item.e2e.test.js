import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CitiesFilterItem from './cities-filter-item';
import {FilterType} from '../../__mocks__/mocks';

configure({adapter: new Adapter()});

test(`CitiesFilter, click on "Filter" button`, () => {
  const onFilterButtonClick = jest.fn();

  const wrapper = shallow(
      <CitiesFilterItem
        filter={FilterType.POPULAR}
        currentFilter={FilterType.POPULAR}
        handleFilterClick={onFilterButtonClick}
      />
  );

  wrapper.find(`li`).simulate(`click`);
  expect(onFilterButtonClick).toHaveBeenCalledTimes(1);
});
