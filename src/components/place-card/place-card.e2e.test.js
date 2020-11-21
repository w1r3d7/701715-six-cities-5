import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {PlaceCard} from './place-card';
import {AuthorizationStatus, offers} from '../../__mocks__/mocks';

configure({adapter: new Adapter()});
const [offer] = offers;

test(`PlaceCard, click on "Favorite" button`, () => {
  const onFavoriteButtonClick = jest.fn();

  const wrapper = shallow(
      <PlaceCard
        offer={offer}
        authStatus={AuthorizationStatus.AUTH}
        removeFromFavoriteAction={onFavoriteButtonClick}
        addToFavoriteAction={onFavoriteButtonClick}
      />
  );

  wrapper.find(`.place-card__bookmark-button`).simulate(`click`, {
    preventDefault: () => {}
  });
  expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
});
