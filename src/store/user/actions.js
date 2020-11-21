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
