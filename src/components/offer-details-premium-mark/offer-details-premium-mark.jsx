import React from 'react';
import PropTypes from 'prop-types';
import PremiumMark from '../premium-mark/premium-mark';

const PROPERTY_CLASS = `property`;

const OfferDetailsPremiumMark = ({isPremium}) => (<PremiumMark cardType={PROPERTY_CLASS} isPremium={isPremium} />);

OfferDetailsPremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired,
};

export default OfferDetailsPremiumMark;
