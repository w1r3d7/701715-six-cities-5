import {City, FilterType} from '../constants.js';
import offers from '../mocks/offers';
import {getOffersByCityAndFilter} from '../utils';
import {ActionType} from './actions';
import {extend} from '../utils';

const initialState = {
  currentCity: City.PARIS,
  offers,
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
    default:
      return state;
  }
};

export {reducer};
