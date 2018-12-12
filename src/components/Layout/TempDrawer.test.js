import React from 'react';
import { mount } from 'enzyme';
import TempDrawer from './TempDrawer';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <TempDrawer view={ new ViewStore() }>
      <div>smack</div>
    </TempDrawer>
  );
});
