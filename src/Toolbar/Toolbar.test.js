import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import LayoutStore from '../Layout/store';

it('renders without crashing', () => {
  shallow(<Toolbar layout={ new LayoutStore() } routeName={'ª•¶§œ¶∑¶∑¶∑¶∑'} />);
});
