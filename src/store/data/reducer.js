import {extend} from '../../utils';
import {ActionType} from './actions';

const initialState = {
  offers: [],
  offerDetails: null,
  reviews: null,
  isOffersLoaded: false,
  isOfferDetailsLoaded: false,
  isReviewsLoaded: false,
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
    default:
      return state;
  }
};

export {reducer};
