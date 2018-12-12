import React from 'react';
import { mount } from 'enzyme';
import Wrapper from './Wrapper';
import ViewStore from '../../stores/ViewStore';

it('renders without crashing', () => {
  mount(
    <Wrapper view={ new ViewStore() }>
      <div>smack</div>
    </Wrapper>
  );
});
