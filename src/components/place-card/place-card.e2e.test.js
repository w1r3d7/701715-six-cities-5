import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {offers} from '../../__mocks__/mocks';
import {OfferDetailsProperty} from '../offer-details-property/offer-details-property';

configure({adapter: new Adapter()});
const [offer] = offers;

test(`OfferDetails, click on "Favorite" button`, () => {
  const onFavoriteButtonClick = jest.fn();

  const wrapper = shallow(
      <OfferDetailsProperty
        offer={offer}
        nearbyOffers={offers}
        changeFavoriteStatusAction={onFavoriteButtonClick}
      />
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`, {
    preventDefault: () => {}
  });
  expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
});
