import * as action from './actions';

const ActionType = action.ActionType;

const city = `Cologne`;
const filter = `Popular`;

describe(`Actions work correctly`, () => {
  it(`Action changeCity work correctly`, () => {
    expect(action.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  });

  it(`Action changeFilter work correctly`, () => {
    expect(action.changeFilter(filter)).toEqual({
      type: ActionType.CHANGE_FILTER,
      payload: filter,
    });
  });
});
