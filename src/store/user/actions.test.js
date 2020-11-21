import * as action from './actions';
import {AuthorizationStatus, info} from '../../__mocks__/mocks';

const ActionType = action.ActionType;

const status = AuthorizationStatus.AUTH;


describe(`Actions work correctly`, () => {
  it(`Action requireAuthorization work correctly`, () => {
    expect(action.requireAuthorization(status)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  });

  it(`Action saveUserInformation work correctly`, () => {
    expect(action.saveUserInformation(info)).toEqual({
      type: ActionType.SAVE_USER_INFORMATION,
      payload: info,
    });
  });
});
