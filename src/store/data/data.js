import {extend, replaceItem, removeItem} from '../../utils/utils';
import {ActionType} from './actions';

const initialState = {
  offers: [],
  isOffersLoaded: false,
  offersError: null,
  offerDetails: null,
  isOfferDetailsLoaded: false,
  offerDetailsError: null,
  reviews: null,
  isReviewsLoaded: false,
  reviewsError: null,
  nearbyOffers: null,
  isNearbyOffersLoaded: false,
  nearbyOffersError: null,
  favoriteOffers: null,
  isFavoriteOffersLoaded: false,
  favoriteOffersError: null,
  isReviewRequestSend: false,
  sendReviewError: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
        isOffersLoaded: true,
      });
    case ActionType.OFFERS_REQUESTED:
      return extend(state, {
        isOffersLoaded: false,
        offersError: null,
      });
    case ActionType.GET_OFFER_DETAILS:
      return extend(state, {
        offerDetails: action.payload,
        isOfferDetailsLoaded: true,
      });
    case ActionType.OFFER_DETAILS_REQUESTED:
      return extend(state, {
        isOfferDetailsLoaded: false,
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
        isReviewsLoaded: true,
      });
    case ActionType.REVIEWS_REQUESTED:
      return extend(state, {
        isReviewsLoaded: false,
        reviewsError: null,
      });
    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      });
    case ActionType.NEARBY_OFFERS_REQUESTED:
      return extend(state, {
        isNearbyOffersLoaded: false,
        nearbyOffersError: null,
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true,
      });
    case ActionType.FAVORITE_OFFERS_REQUESTED:
      return extend(state, {
        isFavoriteOffersLoaded: false,
      });
    case ActionType.REVIEW_SEND_REQUESTED:
      return extend(state, {
        isReviewRequestSend: true,
      });
    case ActionType.REVIEW_SEND:
      return extend(state, {
        isReviewRequestSend: false,
      });
    case ActionType.SEND_REVIEW_ERROR:
      return extend(state, {
        sendReviewError: action.payload,
      });
    case ActionType.REMOVE_FROM_FAVORITE:
      return extend(state, {
        favoriteOffers: removeItem(state.favoriteOffers, action.payload)
      });
    case ActionType.CHANGE_OFFERS_FAVORITE_STATUS:
      return extend(state, {
        offers: replaceItem(state.offers, action.payload)
      });
    case ActionType.CHANGE_NEARBY_OFFERS_FAVORITE_STATUS:
      return extend(state, {
        nearbyOffers: replaceItem(state.nearbyOffers, action.payload)
      });
    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return extend(state, {
        offerDetails: action.payload
      });
    case ActionType.SAVE_REVIEWS_ERROR:
      return extend(state, {
        reviewsError: action.payload
      });
    case ActionType.SAVE_OFFERS_ERROR:
      return extend(state, {
        offersError: action.payload
      });
    case ActionType.SAVE_OFFER_DETAILS_ERROR:
      return extend(state, {
        offerDetailsError: action.payload
      });
    case ActionType.SAVE_NEARBY_OFFERS_ERROR:
      return extend(state, {
        nearbyOffersError: action.payload
      });
    case ActionType.SAVE_FAVORITE_OFFERS_ERROR:
      return extend(state, {
        favoriteOffersError: action.payload
      });
    default:
      return state;
  }
};


export {data};

