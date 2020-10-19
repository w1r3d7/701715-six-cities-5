import React from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types';
import {PREMIUM_TEMPLATE} from '../../const';

const FAVORITE_CARD_CLASS = `favorites__card-info`;

const FavoritesCard = ({offer}) => {
  const {id, photosUrl, isPremium} = offer;
  const [mainPhotoUrl] = photosUrl;

  return (
    <article className="favorites__card place-card" key={id}>
      {isPremium ? PREMIUM_TEMPLATE : ``}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mainPhotoUrl} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <PlaceCard className={FAVORITE_CARD_CLASS} offer={offer} />
    </article>
  );
};

FavoritesCard.propTypes = {
  offer: PropTypes.shape(OFFER_PROP_TYPES).isRequired,
};

export default FavoritesCard;
