import {app} from './app';
import {CityName, FilterType} from '../../constants/constants';
import {ActionType} from './actions';

const city = `Cologne`;

describe(`App reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(app(undefined, {})).toEqual({
      currentCity: CityName.PARIS,
      currentFilter: FilterType.POPULAR,
    });
  });

  it(`Reducer should update currentCity by change city`, () => {
    expect(app({currentCity: null}, {
      type: ActionType.CHANGE_CITY,
      payload: city,
    })).toEqual({
      currentCity: city
    });
  });

  it(`Reducer should update currentFilter by change filter`, () => {
    expect(app({currentFilter: FilterType.POPULAR}, {
      type: ActionType.CHANGE_FILTER,
      payload: FilterType.PRICE_LOW_TO_HIGH,
    })).toEqual({
      currentFilter: FilterType.PRICE_LOW_TO_HIGH
    });
  });
});
