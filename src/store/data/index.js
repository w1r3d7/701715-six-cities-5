import {adaptOfferToClient} from '../adapaters';
import {extend} from '../../utils';

const Url = {
  OFFERS: `/hotels`,
};

export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFER_DETAILS: `GET_OFFER_DETAILS`,
};

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getOfferDetails = (offer) => ({
  type: ActionType.GET_OFFER_DETAILS,
  payload: offer
});


export const fetchOffers = () => (dispatch, _state, api) => (
  api.get(Url.OFFERS)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getOffers(offers)))
);

export const fetchOfferDetails = (id) => (dispatch, _state, api) => (
  api.get(`${Url.OFFERS}/${id}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(getOfferDetails(offer)))
);

const initialState = {
  offers: [],
  offerDetails: null,
  isOffersLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
        isOffersLoaded: true,
      });
    case ActionType.GET_OFFER_DETAILS:
      return extend(state, {
        offerDetails: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};


