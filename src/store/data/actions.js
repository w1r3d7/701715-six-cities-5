import {adaptOfferToClient, adaptReviewToClient} from '../adapaters';
import {ApiUrl} from '../../constants';

export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  OFFERS_REQUESTED: `OFFERS_REQUESTED`,
  GET_OFFER_DETAILS: `GET_OFFER_DETAILS`,
  OFFER_DETAILS_REQUESTED: `OFFER_DETAILS_REQUESTED`,
  GET_REVIEWS: `GET_REVIEWS`,
  REVIEWS_REQUESTED: `REVIEWS_REQUESTED`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`,
  NEARBY_OFFERS_REQUESTED: `NEARBY_OFFERS_REQUESTED`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  FAVORITE_OFFERS_REQUESTED: `FAVORITE_OFFERS_REQUESTED`,
  REVIEW_SEND_REQUESTED: `REVIEW_SEND_REQUESTED`,
  WRITE_ERROR: `WRITE_ERROR`,
  REVIEW_SEND: `REVIEW_SEND`,
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

const getFavoriteOffers = (offers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers,
});

const requestFavoriteOffers = () => ({
  type: ActionType.FAVORITE_OFFERS_REQUESTED,
});

const writeError = (error) => ({
  type: ActionType.WRITE_ERROR,
  payload: error,
});

const sendReviewRequested = () => ({
  type: ActionType.REVIEW_SEND_REQUESTED,
});

const reviewSend = () => ({
  type: ActionType.REVIEW_SEND,
});


export const fetchOffers = () => (dispatch, _state, api) => {
  requestOffers();
  api.get(ApiUrl.OFFERS)
      .then(({data}) => data.map((item) => adaptOfferToClient(item)))
      .then((offers) => dispatch(getOffers(offers)));
};

export const fetchOfferDetails = (id) => (dispatch, _state, api) => {
  dispatch(requestOfferDetails());
  api.get(ApiUrl.OFFERS + id)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(getOfferDetails(offer)));
};

export const fetchReviews = (id) => (dispatch, _state, api) => {
  dispatch(requestReviews());
  api.get(ApiUrl.COMMENTS + id)
    .then(({data}) => data.map((item) => adaptReviewToClient(item)))
    .then((reviews) => dispatch(getReviews(reviews)));
};

export const sendReview = (id, review) => (dispatch, _state, api) => {
  dispatch(sendReviewRequested());
  dispatch(writeError(null));
  api.post(ApiUrl.COMMENTS + id, review)
    .then(({data}) => data.map((item) => adaptReviewToClient(item)))
    .then((reviews) => dispatch(getReviews(reviews)))
    .then(() => dispatch(reviewSend()))
    .catch((error) => {
      dispatch(reviewSend());
      dispatch(writeError(error.response.statusText));
    });
};

export const fetchNearbyOffers = (id) => (dispatch, _state, api) => {
  dispatch(requestNearbyOffers());
  api.get(ApiUrl.OFFERS + id + ApiUrl.NEARBY)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getNearbyOffers(offers)));
};

export const fetchFavoriteOffers = () => (dispatch, _state, api) => {
  requestFavoriteOffers();
  api.get(ApiUrl.FAVORITE)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getFavoriteOffers(offers)));
};
