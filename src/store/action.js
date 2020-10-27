export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
};

export const Actions = {
  changeCity: (currentCity, filteredOffers) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      currentCity,
      filteredOffers,
    }
  }),
  changeFilter: (currentFilter, filteredOffers) => ({
    type: ActionType.CHANGE_FILTER,
    payload: {
      currentFilter,
      filteredOffers,
    }
  }),
};
