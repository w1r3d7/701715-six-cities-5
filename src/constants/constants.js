export const BOOKMARK_ACTIVE_CLASS = `place-card__bookmark-button--active`;
const MAX_RATING = 5;
export const RATING_IN_PERCENT = 100 / MAX_RATING;
export const SINGULAR = 1;
export const MAX_REVIEWS = 10;
export const FAVORITE_CARD_CLASS = `favorites__card-info`;
export const PROPERTY_BOOKMARK_ACTIVE_CLASS = `property__bookmark-button--active`;

export const ResponseStatus = {
  OK: 200,
};

export const RouteUrl = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/`,
  OFFER_ID: `/offer/:id`,
  HOME: `/`,
};

export const ApiUrl = {
  OFFERS: `/hotels/`,
  COMMENTS: `/comments/`,
  NEARBY: `/nearby/`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const FilterType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const RATING_TITLES = [
  `perfect`,
  `good`,
  `not bad`,
  `badly`,
  `terribly`,
];

export const RATING_COUNT = [`5`, `4`, `3`, `2`, `1`];
