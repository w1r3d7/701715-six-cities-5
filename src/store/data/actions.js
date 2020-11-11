import {adaptOfferToClient} from '../adapaters';

const Url = {
  OFFERS: `/hotels`,
};

export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  OFFER_DETAILS_REQUESTED: `OFFER_DETAILS_REQUESTED`,
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

const requestOfferDetails = () => ({
  type: ActionType.OFFER_DETAILS_REQUESTED
});


export const fetchOffers = () => (dispatch, _state, api) => (
  api.get(Url.OFFERS)
    .then(({data}) => data.map((item) => adaptOfferToClient(item)))
    .then((offers) => dispatch(getOffers(offers)))
);

export const fetchOfferDetails = (id) => (dispatch, _state, api) => {
  dispatch(requestOfferDetails());
  api.get(`${Url.OFFERS}/${id}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(getOfferDetails(offer)))
};




