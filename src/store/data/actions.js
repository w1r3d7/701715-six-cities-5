import {adaptOfferToClient, adaptReviewToClient} from '../adapaters';

const Url = {
  OFFERS: `/hotels/`,
  COMMENTS: `/comments/`,
  NEARBY: `/nearby/`,
};

export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  OFFERS_REQUESTED: `OFFERS_REQUESTED`,
  GET_OFFER_DETAILS: `GET_OFFER_DETAILS`,
  OFFER_DETAILS_REQUESTED: `OFFER_DETAILS_REQUESTED`,
  GET_REVIEWS: `GET_REVIEWS`,
  REVIEWS_REQUESTED: `REVIEWS_REQUESTED`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  NEARBY_OFFERS_REQUESTED: `NEARBY_OFFERS_REQUESTED`,
};

const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

const requestOffers = () => ({
  type: ActionType.OFFERS_REQUESTED
});

const getOfferDetails = (offer) => ({
  type: ActionType.GET_OFFER_DETAILS,
  payload: offer
});

const requestOfferDetails = () => ({
  type: ActionType.OFFER_DETAILS_REQUESTED
});

const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

const requestReviews = () => ({
  type: ActionType.REVIEWS_REQUESTED,
});

const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers,
});

const requestNearbyOffers = () => ({
  type: ActionType.NEARBY_OFFERS_REQUESTED,
});


export const fetchOffers = () => (dispatch, _state, api) => {
  requestOffers();
  api.get(Url.OFFERS)
      .then(({data}) => data.map((item) => adaptOfferToClient(item)))
      .then((offers) => dispatch(getOffers(offers)));
};

export const fetchOfferDetails = (id) => (dispatch, _state, api) => {
  dispatch(requestOfferDetails());
  api.get(Url.OFFERS + id)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(getOfferDetails(offer)));
};

export const fetchReviews = (id) => (dispatch, _state, api) => {
  dispatch(requestReviews());
  api.get(Url.COMMENTS + id)
    .then(({data}) => data.map((item) => adaptReviewToClient(item)))
    .then((reviews) => dispatch(getReviews(reviews)));
};

export const fetchNearbyOffers = (id) => (dispatch, _state, api) => {
  dispatch(requestNearbyOffers());
  api.get(Url.OFFERS + id + Url.NEARBY)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getNearbyOffers(offers)));
};
