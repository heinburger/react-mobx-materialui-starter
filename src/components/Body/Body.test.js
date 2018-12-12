import React from 'react';
import { mount } from 'enzyme';
import Body from './Body';
import RouterStore from '../../stores/RouterStore'

it('renders without crashing', () => {
  mount(<Body router={ new RouterStore() } />);
});
