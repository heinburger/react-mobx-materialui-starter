import React from 'react';
import { mount } from 'enzyme';
import Wrapper from './Wrapper';
import LayoutStore from './store';

it('renders without crashing', () => {
  mount(
    <Wrapper layout={ new LayoutStore() }>
      <div>smack</div>
    </Wrapper>
  );
});
