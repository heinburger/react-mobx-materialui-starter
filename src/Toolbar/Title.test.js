import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';

it('renders without crashing', () => {
  mount(<Title title='neat' />);
});
