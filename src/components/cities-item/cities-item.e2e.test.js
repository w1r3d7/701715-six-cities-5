import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CitiesItem from './cities-item';

configure({adapter: new Adapter()});

test(`CitiesFilter, click on "Filter" button`, () => {
  const onCityButtonClick = jest.fn();

  const wrapper = shallow(
      <CitiesItem
        city={`Cologne`}
        currentCity={`Cologne`}
        onCityClick={onCityButtonClick}
      />
  );

  wrapper.find(`a`).simulate(`click`);
  expect(onCityButtonClick).toHaveBeenCalledTimes(1);
});
