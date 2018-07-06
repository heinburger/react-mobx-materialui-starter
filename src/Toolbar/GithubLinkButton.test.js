import React from 'react';
import { mount } from 'enzyme';
import GithubLinkButton from './GithubLinkButton';

it('renders without crashing', () => {
  mount(<GithubLinkButton />);
});
