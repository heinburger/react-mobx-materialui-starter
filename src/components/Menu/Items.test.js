import React from 'react';
import { shallow } from 'enzyme';
import Items from './Items';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  shallow(<Items view={ new ViewStore() } />);
});
