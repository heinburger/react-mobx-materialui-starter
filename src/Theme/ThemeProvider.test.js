import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from './ThemeProvider';
import ThemeStore from './store';

it('renders without crashing', () => {
  mount(
    <ThemeProvider theme={ new ThemeStore() }>
      <div>themed</div>
    </ThemeProvider>
  );
});
