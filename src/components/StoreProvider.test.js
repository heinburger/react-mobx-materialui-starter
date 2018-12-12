import React from 'react';
import { mount } from 'enzyme';
import StoreProvider from './StoreProvider';
import AppStore from '../stores/AppStore';

it('renders without crashing', () => {
  mount(
    <StoreProvider store={ new AppStore() }>
      <div>withStore</div>
    </StoreProvider>
  );
});
