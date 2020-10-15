import {RATING_IN_PERCENT} from './const';

export const getRatingInPercentage = (rating) => {
  return `${rating * RATING_IN_PERCENT}%`;
};

export const getOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};
