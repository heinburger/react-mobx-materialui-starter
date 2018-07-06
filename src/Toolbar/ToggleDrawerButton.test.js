import React from 'react';
import { mount } from 'enzyme';
import ToggleDrawerButton from './ToggleDrawerButton';
import LayoutStore from '../Layout/store'

it('renders without crashing', () => {
  mount(<ToggleDrawerButton layout={ new LayoutStore() } />);
});
