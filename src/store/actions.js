export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_OFFERS: `GET_OFFERS`,
};

export const actions = {
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


export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

