import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import createBrowserHistory from 'history/createBrowserHistory';

it('renders without crashing', () => {
  shallow(<Header history={createBrowserHistory()} />);
});
