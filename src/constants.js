import React from 'react';

export const BOOKMARK_ACTIVE_CLASS = `place-card__bookmark-button--active`;
const MAX_RATING = 5;
export const RATING_IN_PERCENT = 100 / MAX_RATING;

export const OfferType = {
  APARTMENT: `apartment`,
  HOTEL: `hotel`,
  HOUSE: `house`,
  ROOM: `room`,
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

export const CityNameToCoordinates = {
  [City.AMSTERDAM]: [52.38333, 4.9],
  [City.PARIS]: [48.8729139, 2.3216323]
};

export const PREMIUM_TEMPLATE = (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);
