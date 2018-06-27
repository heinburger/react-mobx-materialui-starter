import React from 'react';
import { mount } from 'enzyme';
import Nav from './Nav';
import LayoutStore from './store';

it('renders without crashing', () => {
  mount(
    <Nav layout={ new LayoutStore() }>
      <div>smack</div>
    </Nav>
  );
});
