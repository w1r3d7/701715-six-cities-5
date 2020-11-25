import * as actions from './actions';

import {offers, reviews} from '../../__mocks__/mocks';

const [offer] = offers;

const ActionType = actions.ActionType;

describe(`Data Actions work correctly`, () => {
  it(`Action getOffers work correctly`, () => {
    expect(actions.getOffers(offers)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers
    });
  });

  it(`Action requestOffers work correctly`, () => {
    expect(actions.requestOffers()).toEqual({
      type: ActionType.OFFERS_REQUESTED,
    });
  });

  it(`Action getOfferDetails work correctly`, () => {
    expect(actions.getOfferDetails(offer)).toEqual({
      type: ActionType.GET_OFFER_DETAILS,
      payload: offer,
    });
  });

  it(`Action requestOfferDetails work correctly`, () => {
    expect(actions.requestOfferDetails()).toEqual({
      type: ActionType.OFFER_DETAILS_REQUESTED,
    });
  });

  it(`Action getReviews work correctly`, () => {
    expect(actions.getReviews(reviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action requestReviews work correctly`, () => {
    expect(actions.requestReviews()).toEqual({
      type: ActionType.REVIEWS_REQUESTED,
    });
  });

  it(`Action getNearbyOffers work correctly`, () => {
    expect(actions.getNearbyOffers(offers)).toEqual({
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers
    });
  });

  it(`Action requestNearbyOffers work correctly`, () => {
    expect(actions.requestNearbyOffers()).toEqual({
      type: ActionType.NEARBY_OFFERS_REQUESTED,
    });
  });

  it(`Action getFavoriteOffers work correctly`, () => {
    expect(actions.getFavoriteOffers(offers)).toEqual({
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action requestFavoriteOffers work correctly`, () => {
    expect(actions.requestFavoriteOffers()).toEqual({
      type: ActionType.FAVORITE_OFFERS_REQUESTED,
    });
  });

  it(`Action writeError work correctly`, () => {
    expect(actions.writeSendReviewError(`404`)).toEqual({
      type: ActionType.SEND_REVIEW_ERROR,
      payload: `404`
    });
  });

  it(`Action sendReviewRequested work correctly`, () => {
    expect(actions.sendReviewRequested()).toEqual({
      type: ActionType.REVIEW_SEND_REQUESTED,
    });
  });

  it(`Action reviewSend work correctly`, () => {
    expect(actions.reviewSend()).toEqual({
      type: ActionType.REVIEW_SEND,
    });
  });

  it(`Action removeOfferFromFavorite work correctly`, () => {
    expect(actions.removeOfferFromFavorite(offer)).toEqual({
      type: ActionType.REMOVE_FROM_FAVORITE,
      payload: offer
    });
  });

  it(`Action changeOfferFavoriteStatus work correctly`, () => {
    expect(actions.changeOffersFavoriteStatus(offer)).toEqual({
      type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
      payload: offer
    });
  });

  it(`Action changeNearbyOffersFavoriteStatus work correctly`, () => {
    expect(actions.changeNearbyOffersFavoriteStatus(offer)).toEqual({
      type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
      payload: offer
    });
  });

  it(`Action changeOfferFavoriteStatus work correctly`, () => {
    expect(actions.changeOfferFavoriteStatus(offer)).toEqual({
      type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
      payload: offer
    });
  });
});
