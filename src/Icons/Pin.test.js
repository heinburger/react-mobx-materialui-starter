import React from 'react';
import { shallow } from 'enzyme';
import Pin from './Pin';

it('renders without crashing', () => {
  shallow(<Pin />);
});
