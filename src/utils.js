import {RATING_IN_PERCENT} from './const';
export const getRatingInPercentage = (rating) => `${rating * RATING_IN_PERCENT}%`;

export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city === city);
