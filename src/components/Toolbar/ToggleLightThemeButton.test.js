import React from 'react';
import { mount } from 'enzyme';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(<ToggleLightThemeButton view={ new ViewStore()} />);
});
