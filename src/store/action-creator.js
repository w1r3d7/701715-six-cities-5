import {getOffersByCity} from '../utils';

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (currentCity, offers) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      currentCity,
      filteredOffers: getOffersByCity(offers, currentCity),
    }
  })
};

export default ActionCreator;
