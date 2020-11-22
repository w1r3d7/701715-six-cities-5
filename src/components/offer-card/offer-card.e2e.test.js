import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {offers} from '../../__mocks__/mocks';
import OfferCard from './offer-card';

configure({adapter: new Adapter()});
const [offer] = offers;

test(`OfferCard on mouse over`, () => {
  const onCardHover = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={offer}
        onCardHover={onCardHover}
      />
  );

  wrapper.find(`article`).simulate(`mouseOver`, {
    preventDefault: () => {}
  });
  expect(onCardHover).toHaveBeenCalledTimes(1);
});
