import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import Root from './Root';
import RootStore from './store';

it('renders without crashing (needs a provider)', () => {
  let store = new RootStore();
  mount(
    <Provider
      layout={ store.layout }
      theme={ store.theme }
      history={ store.history }
    >
      <Root />
    </Provider>
  );
});
