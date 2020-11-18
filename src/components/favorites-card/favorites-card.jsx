import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlaceCard from '../place-card/place-card';
import PlaceCardPremiumMark from '../place-card-premium-mark/place-card-premium-mark';

import {OFFER_PROP_TYPES} from '../../types';
import {RouteUrl, FAVORITE_CARD_CLASS} from '../../constants/constants';

const FavoritesCard = ({offer}) => {
  const {id, previewImage, isPremium} = offer;

  return (
    <article className="favorites__card place-card" key={id}>
      <PlaceCardPremiumMark isPremium={isPremium} />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={RouteUrl.OFFER + id}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <PlaceCard cardType={FAVORITE_CARD_CLASS} offer={offer} />
    </article>
  );
};

FavoritesCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default FavoritesCard;
