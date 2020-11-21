import {user} from './user';
import {AuthorizationStatus} from '../../constants/constants';
import {ActionType} from './actions';
import {info} from '../../__mocks__/mocks';

describe(`User reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(user(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      info: {},
    });
  });

  it(`Reducer should update info by load info`, () => {
    expect(user({info: {}}, {
      type: ActionType.SAVE_USER_INFORMATION,
      payload: info,
    })).toEqual({
      info
    });
  });
});
