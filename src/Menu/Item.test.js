import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

it('renders without crashing', () => {
  shallow(
    <Item
      disabled
      onClick={() => false}
      selected
      icon={<div>icon</div>}
      title={'test'}
    />
  );
});
