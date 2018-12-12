import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from './ThemeProvider';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <ThemeProvider view={ new ViewStore() }>
      <div>themed</div>
    </ThemeProvider>
  );
});
