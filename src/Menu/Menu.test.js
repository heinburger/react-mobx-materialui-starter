import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import Divider from '@material-ui/core/Divider';

it('renders without crashing', () => {
  shallow(<Menu />);
});
