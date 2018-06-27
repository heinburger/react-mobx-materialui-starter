import React from 'react';
import { mount } from 'enzyme';
import Bar from './Bar';
import LayoutStore from './store';

it('renders without crashing', () => {
  mount(
    <Bar layout={ new LayoutStore() }>
      <div>smack</div>
    </Bar>
  );
});
