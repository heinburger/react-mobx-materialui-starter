import React from 'react';
import { shallow } from 'enzyme';
import Github from './Github';

it('renders without crashing', () => {
  shallow(<Github />);
});
