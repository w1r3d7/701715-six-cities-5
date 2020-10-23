import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {OFFER_PROP_TYPES} from '../../types';
import PlaceCardPremiumMark from '../place-card-premium-mark/place-card-premium-mark';

const FAVORITE_CARD_CLASS = `favorites__card-info`;

const FavoritesCard = ({offer}) => {
  const {id, photosUrl, isPremium} = offer;
  const [mainPhotoUrl] = photosUrl;

  return (
    <article className="favorites__card place-card" key={id}>
      <PlaceCardPremiumMark isPremium={isPremium} />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <PlaceCard cardType={FAVORITE_CARD_CLASS} offer={offer} />
    </article>
  );
};

FavoritesCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default FavoritesCard;
