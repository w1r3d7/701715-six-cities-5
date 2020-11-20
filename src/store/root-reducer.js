import {combineReducers} from 'redux';
import {data as dataReducer} from './data/data';
import {app as appReducer} from './app/app';
import {user as userReducer} from './user/user';


export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
  [NameSpace.USER]: userReducer,
});
