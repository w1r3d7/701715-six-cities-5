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
  SEND_REVIEW_ERROR: `SEND_REVIEW_ERROR`,
  REVIEW_SEND: `REVIEW_SEND`,
  CHANGE_OFFERS_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  REMOVE_FROM_FAVORITE: `REMOVE_FROM_FAVORITE`,
  CHANGE_NEARBY_OFFERS_FAVORITE_STATUS: `CHANGE_NEARBY_OFFERS_FAVORITE_STATUS`,
  CHANGE_OFFER_FAVORITE_STATUS: `CHANGE_OFFER_FAVORITE_STATUS`,
  SAVE_OFFERS_ERROR: `SAVE_OFFERS_ERROR`,
  SAVE_REVIEWS_ERROR: `SAVE_REVIEWS_ERROR`,
  SAVE_OFFER_DETAILS_ERROR: `SAVE_OFFER_DETAILS_ERROR`,
  SAVE_NEARBY_OFFERS_ERROR: `SAVE_NEARBY_OFFERS_ERROR`,
  SAVE_FAVORITE_OFFERS_ERROR: `SAVE_FAVORITE_OFFERS_ERROR`
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const requestOffers = () => ({
  type: ActionType.OFFERS_REQUESTED
});

export const getOfferDetails = (offer) => ({
  type: ActionType.GET_OFFER_DETAILS,
  payload: offer
});

export const requestOfferDetails = () => ({
  type: ActionType.OFFER_DETAILS_REQUESTED
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

export const requestReviews = () => ({
  type: ActionType.REVIEWS_REQUESTED,
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers,
});

export const requestNearbyOffers = () => ({
  type: ActionType.NEARBY_OFFERS_REQUESTED,
});

export const getFavoriteOffers = (offers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers,
});

export const requestFavoriteOffers = () => ({
  type: ActionType.FAVORITE_OFFERS_REQUESTED,
});

export const writeSendReviewError = (error) => ({
  type: ActionType.SEND_REVIEW_ERROR,
  payload: error,
});

export const sendReviewRequested = () => ({
  type: ActionType.REVIEW_SEND_REQUESTED,
});

export const reviewSend = () => ({
  type: ActionType.REVIEW_SEND,
});

export const removeOfferFromFavorite = (offer) => ({
  type: ActionType.REMOVE_FROM_FAVORITE,
  payload: offer,
});

export const changeOffersFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_OFFERS_FAVORITE_STATUS,
  payload: offer,
});

export const changeNearbyOffersFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS,
  payload: offer,
});

export const changeOfferFavoriteStatus = (offer) => ({
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: offer,
});

export const saveOffersError = (error) => ({
  type: ActionType.SAVE_OFFERS_ERROR,
  payload: error
});

export const saveReviewsError = (error) => ({
  type: ActionType.SAVE_REVIEWS_ERROR,
  payload: error
});

export const saveOfferDetailsError = (error) => ({
  type: ActionType.SAVE_OFFER_DETAILS_ERROR,
  payload: error
});

export const saveNearbyOffersError = (error) => ({
  type: ActionType.SAVE_NEARBY_OFFERS_ERROR,
  payload: error
});

export const saveFavoriteOffersError = (error) => ({
  type: ActionType.SAVE_FAVORITE_OFFERS_ERROR,
  payload: error
});
