import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';
import ThemeStore from '../Theme/store';

it('renders without crashing', () => {
  shallow(<Routes theme={ new ThemeStore() } />);
});
