import MockAdapter from 'axios-mock-adapter';

import {createApi} from '../../services/api';
import {checkAuth, login} from './api-actions';

import {ApiUrl} from '../../constants/constants';
import {AuthorizationStatus, user, infoFromServer} from '../../__mocks__/mocks';
import {ActionType} from './actions';
import {adaptUserInfoToClient} from '../adapaters';

const api = createApi(() => {});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API GET /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkingAuth = checkAuth();

    apiMock
      .onGet(ApiUrl.LOGIN)
      .reply(200, infoFromServer);

    return checkingAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_INFORMATION,
          payload: adaptUserInfoToClient(infoFromServer),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API POST to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendLogin = login(user);

    apiMock
      .onPost(ApiUrl.LOGIN)
      .reply(200, infoFromServer);

    return sendLogin(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_INFORMATION,
          payload: adaptUserInfoToClient(infoFromServer),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
