import {getOffers} from './actions';

const Url = {
  OFFERS: `/hotels`,
};


export const fetchOffers = () => (dispatch, _state, api) => (
  api.get(Url.OFFERS)
    .then(({data}) => dispatch(getOffers(data)))
);

