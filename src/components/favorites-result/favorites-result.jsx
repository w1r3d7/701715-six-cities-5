import React from 'react';
import {BOOKMARK_ACTIVE_CLASS} from '../../const.js';
import {getRatingInPercentage} from '../../utils.js';
import {OFFER_PROP_TYPES} from '../../types.js';
import PropTypes from 'prop-types';

const FavoritesResult = ({favoritesOffers}) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesOffers.map((offer) => {
                const {
                  id,
                  photosUrl,
                  type,
                  price,
                  description,
                  isInBookmark,
                  rating
                } = offer;
                const [mainPhotoUrl] = photosUrl;

                return (
                  <article className="favorites__card place-card" key={id}>
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src={mainPhotoUrl} width="150" height="110" alt="Place image" />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className={`place-card__bookmark-button button ${isInBookmark ? BOOKMARK_ACTIVE_CLASS : ``}`} type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"/>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: getRatingInPercentage(rating)}} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{description}</a>
                      </h2>
                      <p className="place-card__type">{type}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
);

FavoritesResult.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired
};

export default FavoritesResult;
