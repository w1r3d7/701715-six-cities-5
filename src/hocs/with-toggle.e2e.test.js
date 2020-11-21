import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withToggle from './with-toggle';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggle(MockComponent);

test(`WithToggle work correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isToggleOpen).toEqual(false);
  wrapper.props().onToggleClick();
  expect(wrapper.props().isToggleOpen).toEqual(true);
});
