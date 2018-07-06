import React from 'react';
import { mount } from 'enzyme';
import Bar from './Bar';
import LayoutStore from './store';
import ThemeStore from '../Theme/store';

it('renders without crashing', () => {
  mount(
    <Bar layout={ new LayoutStore() } theme={ new ThemeStore() }>
      <div>smack</div>
    </Bar>
  );
});
