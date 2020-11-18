import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {PlaceCard} from './place-card';

import {offers, AuthorizationStatus} from '../../__mocks__/mocks';

const [offer] = offers;

const noop = () => {};

it(`PlaceCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            authStatus={AuthorizationStatus.AUTH}
            offer={offer}
            removeFromFavoriteAction={noop}
            addToFavoriteAction={noop}
          />
        </BrowserRouter>

    ).toJSON();

  expect(tree).toMatchSnapshot();
});
