import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';

const PLACES_COUNT = 350;

ReactDom.render(<App placesCount={PLACES_COUNT} offers={offers} />, document.querySelector(`#root`));
