import {CityName, FilterType} from '../../constants/constants';
import {extend} from '../../utils/utils';
import {ActionType} from './actions';


const initialState = {
  currentCity: CityName.PARIS,
  currentFilter: FilterType.POPULAR,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });
    default:
      return state;
  }
};

export {app};
