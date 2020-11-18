import {ApiUrl, FAVORITE_CARD_CLASS} from '../../constants/constants';
import {adaptOfferToClient, adaptReviewToClient} from '../adapaters';
import {
  getOffers,
  getOfferDetails,
  requestOffers,
  requestOfferDetails,
  requestReviews,
  getReviews,
  sendReviewRequested,
  writeError,
  reviewSend,
  requestNearbyOffers,
  getNearbyOffers,
  requestFavoriteOffers,
  getFavoriteOffers,
  FavoriteStatus,
  changeOfferFavoriteStatus,
  removeOfferFromFavorite
} from './actions';

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

export const removeFromFavorite = (offerId, cardType) => (dispatch, _state, api) => {
  api.post(ApiUrl.FAVORITE + `/` + offerId + `/` + FavoriteStatus.REMOVE)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(changeOfferFavoriteStatus(offer)))
    .then((action) => cardType === FAVORITE_CARD_CLASS ? dispatch(removeOfferFromFavorite(action.payload)) : null);
};

export const addToFavorite = (offerId) => (dispatch, _state, api) => {
  api.post(ApiUrl.FAVORITE + `/` + offerId + `/` + FavoriteStatus.ADD)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(changeOfferFavoriteStatus(offer)));
};
