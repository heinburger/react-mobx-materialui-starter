import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';
import ViewStore from '../../stores/ViewStore';
import AppStore from '../../stores/AppStore';

it('renders without crashing', () => {
  mount(<Title view={ new ViewStore(new AppStore()) } />);
});
