import {FilterType, RATING_IN_PERCENT} from './constants';
export const getRatingInPercentage = (rating) => `${rating * RATING_IN_PERCENT}%`;


export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city === city);
export const getOffersByFilter = (filteredOffers, filterType) => {
  switch (filterType) {
    case FilterType.TOP_RATED_FIRST:
      return filteredOffers.slice().sort((a, b) => b.rating - a.rating);
    case FilterType.PRICE_HIGH_TO_LOW:
      return filteredOffers.slice().sort((a, b) => b.price - a.price);
    case FilterType.PRICE_LOW_TO_HIGH:
      return filteredOffers.slice().sort((a, b) => a.price - b.price);
  }

  return filteredOffers;
};

export const getOffersByCityAndFilter = (offers, city, filter) => {
  const offersByCity = getOffersByCity(offers, city);
  return getOffersByFilter(offersByCity, filter);
};

export const extend = (a, b) => Object.assign({}, a, b);

const SINGULAR = 1;
export const checkForPlural = (item, count) => count > SINGULAR ? `${item}s` : item;
