import {createSelector} from 'reselect';
import {getOffersByCityAndFilter, sortAndCutReviews} from '../utils';
import {NameSpace} from './root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentCity = (state) => state[NameSpace.APP].currentCity;
export const getCurrentFilter = (state) => state[NameSpace.APP].currentFilter;
export const getOffersLoadingStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getOfferDetailsLoadingStatus = (state) => state[NameSpace.DATA].isOfferDetailsLoaded;
export const getOfferDetails = (state) => state[NameSpace.DATA].offerDetails;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getReviewsLoadingStatus = (state) => state[NameSpace.DATA].isReviewsLoaded;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getNearbyOffersLoadingStatus = (state) => state[NameSpace.DATA].isNearbyOffersLoaded;
export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserInformation = (state) => state[NameSpace.USER].info;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getFavoriteLoadingStatus = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;


export const getFilteredOffers = createSelector(
    getOffers,
    getCurrentCity,
    getCurrentFilter,
    (offers, currentCity, currentFilter) => getOffersByCityAndFilter(offers, currentCity, currentFilter)
);

export const getSortedReviews = createSelector(
    getReviews,
    (reviews) => sortAndCutReviews(reviews)
);
