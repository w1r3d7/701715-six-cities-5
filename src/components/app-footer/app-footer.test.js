import renderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppFooter from './app-footer';

test(`AppFooter render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AppFooter />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
