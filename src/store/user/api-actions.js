import {ApiUrl, AuthorizationStatus, RouteUrl} from '../../constants/constants';
import {browserHistory} from '../../browser-history';
import {requireAuthorization, saveUserInformation} from './actions';

export const checkAuth = () => (dispatch, _state, api) => {
  return api.get(ApiUrl.LOGIN)
    .then(({data}) => dispatch(saveUserInformation(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _state, api) => {
  return api.post(ApiUrl.LOGIN, {email, password})
    .then(({data}) => dispatch(saveUserInformation(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => browserHistory.push(RouteUrl.HOME));
};
