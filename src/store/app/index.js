import {City, FilterType} from '../../constants.js';
import {extend} from '../../utils';

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
};

export const changeCity = (currentCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: {
    currentCity
  }
});

export const changeFilter = (currentFilter) => ({
  type: ActionType.CHANGE_FILTER,
  payload: {
    currentFilter,
  }
});


const initialState = {
  currentCity: City.PARIS,
  currentFilter: FilterType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload.currentCity,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload.currentFilter,
      });
    default:
      return state;
  }
};

export {reducer};
