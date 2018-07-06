import React from 'react';
import { mount } from 'enzyme';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import ThemeStore from '../Theme/store'

it('renders without crashing', () => {
  mount(<ToggleLightThemeButton theme={ new ThemeStore()} />);
});
