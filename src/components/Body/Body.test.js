import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';
import RouterStore from '../../stores/RouterStore'
import AppStore from '../../stores/AppStore'

it('renders without crashing', () => {
  shallow(<Body router={ new RouterStore(new AppStore()) } />);
});
