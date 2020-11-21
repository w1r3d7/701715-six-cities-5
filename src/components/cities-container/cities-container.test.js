import React from 'react';
import rendrer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {CitiesContainer} from './cities-container';
import {AuthorizationStatus, FilterType, offers} from '../../__mocks__/mocks';


const mockStore = configureStore();

const currentCity = `Moscow`;

describe(`CitiesContainer render correctly`, () => {
  it(`CitiesContainer offers empty`, () => {

    const tree = rendrer
      .create(
          <CitiesContainer
            offers={offers}
            isOffersEmpty={true}
            currentCity={currentCity}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CitiesContainer have offers`, () => {
    const initialState = {
      APP: {
        currentFilter: FilterType.POPULAR,
        onFilterChange: () => {},

      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    };
    const store = mockStore(initialState);

    const tree = rendrer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <CitiesContainer
                offers={offers}
                isOffersEmpty={false}
                currentCity={currentCity}
              />
            </BrowserRouter>
          </Provider>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


