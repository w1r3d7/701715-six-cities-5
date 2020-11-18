import React from 'react';
import PropTypes from 'prop-types';

import PremiumMark from '../premium-mark/premium-mark';

const PLACE_CARD_CLASS = `place-card`;

const PlaceCardPremiumMark = ({isPremium}) => (
  <PremiumMark
    cardType={PLACE_CARD_CLASS}
    isPremium={isPremium}
  />
);

PlaceCardPremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired,
};

export default PlaceCardPremiumMark;
