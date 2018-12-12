import React from 'react';
import { mount } from 'enzyme';
import DrawerSwitcher from './DrawerSwitcher';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <DrawerSwitcher view={ new ViewStore() }>
      <div>smack</div>
    </DrawerSwitcher>
  );
});
