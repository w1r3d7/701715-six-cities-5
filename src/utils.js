import {RATING_IN_PERCENT} from './const';
export const getRatingInPercentage = (rating) => `${rating * RATING_IN_PERCENT}%`;

export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city === city);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
