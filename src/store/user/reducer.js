import {ActionType} from './actions';
import {extend} from '../../utils';
import {AuthorizationStatus} from '../../constants';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  info: {},
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(
          state,
          {
            authorizationStatus: action.payload
          }
      );
    case ActionType.SAVE_USER_INFORMATION:
      return extend(
          state,
          {
            info: action.payload
          }
      );
    default:
      return state;
  }
};
