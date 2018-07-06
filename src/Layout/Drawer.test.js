import React from 'react';
import { mount } from 'enzyme';
import Drawer from './Drawer';
import LayoutStore from './store';

it('renders without crashing', () => {
  mount(
    <Drawer layout={ new LayoutStore() }>
      <div>smack</div>
    </Drawer>
  );
});
