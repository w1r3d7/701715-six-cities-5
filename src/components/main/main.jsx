import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../app-header/app-header';
import CitiesResult from '../cities-result/cities-result';
import CitiesEmpty from '../cities-empty/cities-empty';
import {OFFER_PROP_TYPES} from '../../types.js';

const PAGE_MAIN_EMPTY_CLASS = `page__main--index-empty`;

const Main = ({placesCount, offers, onOfferClick}) => {

  const isOffersEmpty = Boolean(!offers.length);

  return (
    <div className={`page page--gray page--main ${isOffersEmpty ? PAGE_MAIN_EMPTY_CLASS : ``}`}>
      <AppHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          {
            isOffersEmpty ?
              <CitiesEmpty city="Amsterdam" /> :
              <CitiesResult offers={offers} city="Amsterdam" onOfferClick={onOfferClick} placesCount={placesCount} />
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES)
  ).isRequired
};

export default Main;
