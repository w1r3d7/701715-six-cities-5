import {
  FilterType,
  RATING_IN_PERCENT,
  SINGULAR,
  MAX_REVIEWS
} from '../constants/constants';

export const getRatingInPercentage = (rating) => `${rating * RATING_IN_PERCENT}%`;

export const filterOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);

export const sortOffersByFilterType = (filteredOffers, filterType) => {
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

export const getOffersByCityAndFilter = (offers, city, filterType) => {
  const filteredOffersByCity = filterOffersByCity(offers, city);
  return sortOffersByFilterType(filteredOffersByCity, filterType);
};

export const extend = (a, b) => Object.assign({}, a, b);

export const checkForPlural = (item, count) => count > SINGULAR ? `${item}s` : item;

export const formatDate = (date) => {
  const newDate = new Date(date);

  return new Intl.DateTimeFormat(`en-US`, {month: `long`, year: `numeric`}).format(newDate);
};

export const sortAndCutReviews = (reviews) => {
  if (!reviews) {
    return reviews;
  }

  return reviews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS);
};

const findIndex = (array, item) => {
  return array.findIndex((it) => it.id === item.id);
};

export const replaceItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    item,
    ...array.slice(itemIndex + 1)
  ];
};

export const removeItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    ...array.slice(itemIndex + 1)
  ];
};

