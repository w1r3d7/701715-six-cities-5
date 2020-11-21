import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveCardId from './with-active-card-id';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCardId(MockComponent);

test(`withActiveCardId work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeCardId).toEqual(null);
  wrapper.props().onCardHover(1);
  expect(wrapper.props().activeCardId).toEqual(1);
});
