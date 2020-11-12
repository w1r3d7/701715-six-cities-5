import React from 'react';
import PropTypes from 'prop-types';

import OfferDetailsCard from '../offer-details-card/offer-details-card';
import {withLoading} from '../../hocs/with-loading';
import {OFFER_PROP_TYPES} from '../../types';

const OfferDetailsNearbyList = ({nearbyOffers}) => {
  return nearbyOffers.map((offerItem) => (
    <OfferDetailsCard offer={offerItem} key={offerItem.id}/>
  ));
};

OfferDetailsNearbyList.propTypes = {
  nearbyOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default withLoading(OfferDetailsNearbyList);
