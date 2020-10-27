import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({isPremium, cardType}) => (
  isPremium
    ? (
      <div className={`${cardType}__mark`}>
        <span>Premium</span>
      </div>
    )
    : null);

PremiumMark.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default PremiumMark;
