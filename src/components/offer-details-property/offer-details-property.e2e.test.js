import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {OfferDetailsProperty} from './offer-details-property';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

configure({adapter: new Adapter()});
const [offer] = offers;

test(`Offer details, click on "Favorite" button`, () => {
  const onFavoriteButtonClick = jest.fn();

  const wrapper = shallow(
      <OfferDetailsProperty
        offer={offer}
        authStatus={AuthorizationStatus.AUTH}
        changeFavoriteStatusAction={onFavoriteButtonClick}
        nearbyOffers={offers}
      />
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`, {
    preventDefault: () => {}
  });
  expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
});
