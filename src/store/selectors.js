import {createSelector} from 'reselect';
import {getOffersByCityAndFilter} from '../utils';
import {NameSpace} from './root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentCity = (state) => state[NameSpace.APP].currentCity;
export const getCurrentFilter = (state) => state[NameSpace.APP].currentFilter;
export const getOffersLoadingStatus = (state) => state[NameSpace.DATA].isOffersLoaded;

export const getFilteredOffers = createSelector(
    getOffers,
    getCurrentCity,
    getCurrentFilter,
    (offers, currentCity, currentFilter) => getOffersByCityAndFilter(offers, currentCity, currentFilter)
);
