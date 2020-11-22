import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {LoginPage} from './login-page';

const noop = () => {};

test(`LoginPage render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <LoginPage
            loginAction={noop}
            currentCity={`Cologne`}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
