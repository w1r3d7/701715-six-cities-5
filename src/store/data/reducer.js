import {extend} from '../../utils';
import {ActionType} from './actions';

const initialState = {
  offers: [],
  isOffersLoaded: false,
  offerDetails: null,
  isOfferDetailsLoaded: false,
  reviews: null,
  isReviewsLoaded: false,
  nearbyOffers: null,
  isNearbyOffersLoaded: false,
  favoriteOffers: null,
  isFavoriteOffersLoaded: false,
  isReviewRequestSend: false,
  sendReviewError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
        isOffersLoaded: true,
      });
    case ActionType.OFFERS_REQUESTED:
      return extend(state, {
        isOffersLoaded: false,
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
      });
    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
        isNearbyOffersLoaded: true,
      });
    case ActionType.NEARBY_OFFERS_REQUESTED:
      return extend(state, {
        isNearbyOffersLoaded: false,
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
    case ActionType.WRITE_ERROR:
      return extend(state, {
        sendReviewError: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};

