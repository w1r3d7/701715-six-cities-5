import {City, FilterType} from '../constants.js';
import {getOffersByCityAndFilter} from '../utils';
import {ActionType} from './actions';
import {extend} from '../utils';

const initialState = {
  currentCity: City.PARIS,
  offers: [],
  currentFilter: FilterType.POPULAR,
};

initialState.filteredOffers = getOffersByCityAndFilter(
    initialState.offers,
    initialState.currentCity,
    initialState.currentFilter
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.currentCity,
        filteredOffers: action.payload.filteredOffers,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload.currentFilter,
        filteredOffers: action.payload.filteredOffers,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
