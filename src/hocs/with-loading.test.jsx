import React from 'react';
import renderer from 'react-test-renderer';

import withLoading from './with-loading';

const MockComponent = () => (<div />);
const MockComponentWrapped = withLoading(MockComponent);

describe(`WithLoading hok work correctly`, () => {
  it(`IsLoaded`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            isLoaded={true}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Is not loaded`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            isLoaded={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
