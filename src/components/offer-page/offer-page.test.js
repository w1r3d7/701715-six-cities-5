import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {OfferPage} from './offer-page';

import {AuthorizationStatus, FilterType, info, offers, reviews} from '../../__mocks__/mocks';
import configureStore from 'redux-mock-store';

const [offer] = offers;

const noop = () => {};
const mockStore = configureStore();

const match = {
  params: {
    id: `1`
  }
};

test(`OfferPage render correctly`, () => {
  const initialState = {
    APP: {
      currentFilter: FilterType.POPULAR,
      onFilterChange: () => {},
      currentCity: `Cologne`,
    },
    DATA: {
      offers,
      isOffersLoaded: true,
      reviews,
      isReviewsLoaded: true,
      nearbyOffers: offers,
      isNearbyOffersLoaded: true,
      isReviewRequestSend: false,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      info
    }
  };
  const store = mockStore(initialState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferPage
              match={match}
              nearbyOffers={offers}
              offer={offer}
              fetchNearby={noop}
              fetchOffer={noop}
              isOfferDetailsLoaded={true}
              isNearbyOffersLoaded={true}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
