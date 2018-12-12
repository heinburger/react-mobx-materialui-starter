import React from 'react';
import { mount } from 'enzyme';
import Bar from './Bar';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <Bar view={ new ViewStore() }>
      <div>smack</div>
    </Bar>
  );
});
