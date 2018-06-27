import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar';
import LayoutStore from './store';

it('renders without crashing', () => {
  shallow(
    <Bar layout={ new LayoutStore() }>
      <div>smack</div>
    </Bar>
  );
});
