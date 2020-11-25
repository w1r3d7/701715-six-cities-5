import MockAdapter from 'axios-mock-adapter';

import {createApi} from '../../services/api';
import * as apiAction from './api-actions';

import {ApiUrl, ResponseStatus, FavoriteStatus} from '../../constants/constants';
import {reviewsFromServer, offersFromServer} from '../../__mocks__/mocks';
import {ActionType} from './actions';
import {adaptOfferToClient, adaptReviewToClient} from '../adapaters';

const api = createApi(() => {});
const [offerFromServer] = offersFromServer;
const adaptedOffers = offersFromServer.map((offerItem) => adaptOfferToClient(offerItem));
const [reviewFromServer] = reviewsFromServer;
const adaptedReviews = reviewsFromServer.map((reviewItem) => adaptReviewToClient(reviewItem));
const offerId = 1;
const getOffers = apiAction.fetchOffers();
const getOfferDetails = apiAction.fetchOfferDetails(offerId);
const getReviews = apiAction.fetchReviews(offerId);
const sendReview = apiAction.sendReview(offerId, reviewFromServer);
const getNearbyOffers = apiAction.fetchNearbyOffers(offerId);
const getFavoriteOffers = apiAction.fetchFavoriteOffers();
const changeFavoriteStatus = apiAction.changeFavoriteStatus(offerId);

new MockAdapter(api)
  .onGet(ApiUrl.OFFERS).reply(ResponseStatus.OK, offersFromServer)
  .onGet(ApiUrl.OFFERS + offerId).reply(ResponseStatus.OK, offerFromServer)
  .onGet(ApiUrl.COMMENTS + offerId).reply(ResponseStatus.OK, reviewsFromServer)
  .onPost(ApiUrl.COMMENTS + offerId).reply(ResponseStatus.OK, reviewsFromServer)
  .onGet(ApiUrl.OFFERS + offerId + ApiUrl.NEARBY).reply(ResponseStatus.OK, offersFromServer)
  .onGet(ApiUrl.FAVORITE).reply(ResponseStatus.OK, offersFromServer)
  .onPost(`${ApiUrl.FAVORITE}/${offerId}/${FavoriteStatus.REMOVE}`).reply(ResponseStatus.OK, offerFromServer)
  .onPost(`${ApiUrl.FAVORITE}/${offerId}/${FavoriteStatus.ADD}`).reply(ResponseStatus.OK, offerFromServer);

describe(`Data Async operations work correctly`, () => {
  it(`Should make a correct API GET /hotels`, () => {
    const dispatch = jest.fn();
    return getOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API GET /hotels/id`, () => {
    const dispatch = jest.fn();
    return getOfferDetails(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFER_DETAILS_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_OFFER_DETAILS,
          payload: adaptOfferToClient(offerFromServer),
        });
      });
  });

  it(`Should make a correct API GET /comments/id`, () => {
    const dispatch = jest.fn();
    return getReviews(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEWS_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews,
        });
      });
  });

  it(`Should make a correct API POST /comments/id`, () => {
    const dispatch = jest.fn();
    return sendReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEW_SEND_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SEND_REVIEW_ERROR,
          payload: null,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REVIEW_SEND,
        });
      });
  });

  it(`Should make a correct API GET /hotels/id/nearby`, () => {
    const dispatch = jest.fn();
    return getNearbyOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEARBY_OFFERS_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_NEARBY_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API GET /favorite`, () => {
    const dispatch = jest.fn();
    return getFavoriteOffers(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE_OFFERS_REQUESTED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_FAVORITE_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API POST /favorite/id/*`, () => {
    const dispatch = jest.fn();
    return changeFavoriteStatus(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
          payload: adaptOfferToClient(offerFromServer)
        });
      });
  });
});
