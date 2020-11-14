export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
};

export const changeCity = (currentCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: {
    currentCity
  }
});

export const changeFilter = (currentFilter) => ({
  type: ActionType.CHANGE_FILTER,
  payload: {
    currentFilter,
  }
});
