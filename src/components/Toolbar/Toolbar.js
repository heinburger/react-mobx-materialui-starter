import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Title from './Title';
import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';
import Search from '../Search';

const Toolbar = ({ view }) => (
  <>
    {view.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    <Title />
    <Search />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </>
);

Toolbar.propTypes = {
  view: PropTypes.object.isRequired,
};

export default inject('view')(observer(Toolbar));
