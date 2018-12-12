import React from 'react';
import { mount } from 'enzyme';
import ToggleDrawerButton from './ToggleDrawerButton';
import ViewStore from '../../stores/ViewStore'

it('renders without crashing', () => {
  mount(<ToggleDrawerButton view={ new ViewStore() } />);
});
