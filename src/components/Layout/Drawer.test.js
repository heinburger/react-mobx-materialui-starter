import React from 'react';
import { mount } from 'enzyme';
import Drawer from './Drawer';

it('renders without crashing', () => {
  mount(
    <Drawer>
      <div>smack</div>
    </Drawer>
  );
});
