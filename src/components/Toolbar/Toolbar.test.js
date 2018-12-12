import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  shallow(<Toolbar view={ new ViewStore() } routeName={'ª•¶§œ¶∑¶∑¶∑¶∑'} />);
});
