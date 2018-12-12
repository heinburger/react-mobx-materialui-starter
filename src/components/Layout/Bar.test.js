import React from 'react';
import { mount } from 'enzyme';
import Bar from './Bar';

it('renders without crashing', () => {
  mount(
    <Bar>
      <div>smack</div>
    </Bar>
  );
});
