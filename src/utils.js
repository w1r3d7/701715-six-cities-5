export const getRatingInPercentage = (rating) => {
  const MAX_RATING = 5;
  const ONE_RATING_IN_PERCENT = 100 / MAX_RATING;
  return rating * ONE_RATING_IN_PERCENT + `%`;
};

