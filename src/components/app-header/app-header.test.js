import React from 'react';
import rerender from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {AppHeader} from './app-header';
import {AuthorizationStatus} from '../../__mocks__/mocks';


describe(`AppHeader render correctly`, () => {

  it(`Render with Auth`, () => {
    const tree = rerender
      .create(
          <BrowserRouter>
            <AppHeader
              authStatus={AuthorizationStatus.AUTH}
              userInfo={{email: `test@test.ru`}}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render without Auth`, () => {
    const tree = rerender
      .create(
          <BrowserRouter>
            <AppHeader
              authStatus={AuthorizationStatus.NO_AUTH}
              userInfo={{email: null}}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
