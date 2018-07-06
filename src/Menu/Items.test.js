import React from 'react';
import { shallow } from 'enzyme';
import Items from './Items';

it('renders without crashing', () => {
  shallow(<Items />);
});
