import {City} from '../const.js';
import offers from '../mocks/offers';
import {getOffersByCity} from '../utils';
import {ActionType} from './action-creator';
import {extend} from '../utils';

const initialState = {
  currentCity: City.PARIS,
  offers,
};

initialState.filteredOffers = getOffersByCity(initialState.offers, initialState.currentCity);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.currentCity,
        filteredOffers: action.payload.filteredOffers,
      });
    default:
      return state;
  }
};

export {reducer};
