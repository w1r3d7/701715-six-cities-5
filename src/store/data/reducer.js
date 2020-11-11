import {extend} from '../../utils';
import {ActionType} from './actions';

const initialState = {
  offers: [],
  offerDetails: null,
  isOffersLoaded: false,
  isOfferDetailsLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
        isOffersLoaded: true,
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
    case ActionType.OFFERS_REQUESTED:
      return extend(state, {
        isOffersLoaded: false,
      });
    default:
      return state;
  }
};

export {reducer};

