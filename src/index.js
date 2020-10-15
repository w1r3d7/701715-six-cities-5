import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';

ReactDom.render(<App offers={offers}/>, document.querySelector(`#root`));
