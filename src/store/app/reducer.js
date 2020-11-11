import {City, FilterType} from '../../constants';
import {extend} from '../../utils';
import {ActionType} from './actions';


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
