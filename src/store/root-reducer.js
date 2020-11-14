import {combineReducers} from 'redux';
import {reducer as dataReducer} from './data/reducer';
import {reducer as appReducer} from './app/reducer';


export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
});
