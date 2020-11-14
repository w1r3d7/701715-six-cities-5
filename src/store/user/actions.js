import {AuthorizationStatus} from '../../constants';
import {browserHistory} from '../../browser-history';

export const ActionType = {
  CHECK_AUTH: `CHECK_AUTH`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_USER_INFORMATION: `SAVE_USER_INFORMATION`
};


export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const saveUserInformation = (userInfo) => ({
  type: ActionType.SAVE_USER_INFORMATION,
  payload: userInfo,
});

export const checkAuth = () => (dispatch, _state, api) => {
  api.get(`/login`)
    .then(({data}) => dispatch(saveUserInformation(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _state, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(saveUserInformation(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => browserHistory.push(`/`));
};
