import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const PLACES_COUNT = 350;

ReactDom.render(<App placesCount={PLACES_COUNT}/>, document.querySelector(`#root`));
