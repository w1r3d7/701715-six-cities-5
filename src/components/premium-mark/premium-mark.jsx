import React from 'react';
import PropTypes from 'prop-types';

const getPremiumTemplate = (cardType) => (
  <div className={`${cardType}__mark`}>
    <span>Premium</span>
  </div>
);

const PremiumMark = ({isPremium, cardType}) => isPremium ? getPremiumTemplate(cardType) : null;

PremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default PremiumMark;
