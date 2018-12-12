import React from 'react';
import { mount } from 'enzyme';
import Drawer from './Drawer';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <Drawer view={ new ViewStore() }>
      <div>smack</div>
    </Drawer>
  );
});
