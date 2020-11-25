import {ApiUrl, FavoriteButtonType, FavoriteStatus} from '../../constants/constants';
import {adaptOfferToClient, adaptReviewToClient} from '../adapaters';
import {
  getOffers,
  getOfferDetails,
  requestOffers,
  requestOfferDetails,
  requestReviews,
  getReviews,
  sendReviewRequested,
  writeSendReviewError,
  reviewSend,
  requestNearbyOffers,
  getNearbyOffers,
  requestFavoriteOffers,
  getFavoriteOffers,
  changeOffersFavoriteStatus,
  removeOfferFromFavorite,
  changeNearbyOffersFavoriteStatus,
  changeOfferFavoriteStatus,
  saveOffersError,
  saveReviewsError,
  saveOfferDetailsError,
  saveNearbyOffersError,
  saveFavoriteOffersError
} from './actions';

export const fetchOffers = () => (dispatch, _state, api) => {
  requestOffers();
  return api.get(ApiUrl.OFFERS)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getOffers(offers)))
    .catch((error) => dispatch(saveOffersError(error.response.statusText)));
};

export const fetchOfferDetails = (id) => (dispatch, _state, api) => {
  dispatch(requestOfferDetails());
  return api.get(ApiUrl.OFFERS + id)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(getOfferDetails(offer)))
    .catch((error) => dispatch(saveOfferDetailsError(error.response.statusText)));
};

export const fetchReviews = (id) => (dispatch, _state, api) => {
  dispatch(requestReviews());
  return api.get(ApiUrl.COMMENTS + id)
    .then(({data}) => data.map((item) => adaptReviewToClient(item)))
    .then((reviews) => dispatch(getReviews(reviews)))
    .catch((error) => dispatch(saveReviewsError(error.response.statusText)));
};

export const sendReview = (id, review) => (dispatch, _state, api) => {
  dispatch(sendReviewRequested());
  dispatch(writeSendReviewError(null));
  return api.post(ApiUrl.COMMENTS + id, review)
    .then(({data}) => data.map((item) => adaptReviewToClient(item)))
    .then((reviews) => dispatch(getReviews(reviews)))
    .then(() => dispatch(reviewSend()))
    .catch((error) => {
      dispatch(reviewSend());
      dispatch(writeSendReviewError(error.response.statusText));
    });
};

export const fetchNearbyOffers = (id) => (dispatch, _state, api) => {
  dispatch(requestNearbyOffers());
  return api.get(ApiUrl.OFFERS + id + ApiUrl.NEARBY)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getNearbyOffers(offers)))
    .catch((error) => dispatch(saveNearbyOffersError(error.response.statusText)));
};

export const fetchFavoriteOffers = () => (dispatch, _state, api) => {
  dispatch(requestFavoriteOffers());
  return api.get(ApiUrl.FAVORITE)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getFavoriteOffers(offers)))
    .catch((error) => dispatch(saveFavoriteOffersError(error.response.statusText)));
};

export const changeFavoriteStatus = (
    offerId,
    favoriteButtonType,
    isInBookmark
) => (dispatch, _state, api) => {
  const actionType = isInBookmark ? FavoriteStatus.REMOVE : FavoriteStatus.ADD;
  return api.post(`${ApiUrl.FAVORITE}/${offerId}/${actionType}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(changeOffersFavoriteStatus(offer)))
    .then((action) => {
      switch (favoriteButtonType) {
        case FavoriteButtonType.FAVORITE_PAGE:
          dispatch(removeOfferFromFavorite(action.payload));
          break;
        case FavoriteButtonType.NEARBY_OFFER:
          dispatch(changeNearbyOffersFavoriteStatus(action.payload));
          break;
        case FavoriteButtonType.OFFER_PAGE:
          dispatch(changeOfferFavoriteStatus(action.payload));
          break;
      }
    });
};
