import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { capitalize } from '../utils'

import Title from './Title'
import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';
import Search from '../Search'

const Toolbar = ({ layout, routeName }) => (
  <React.Fragment>
    {layout.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    <Title title={
      capitalize(routeName)
    }/>
    <Search />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </React.Fragment>
);

Toolbar.propTypes = {
  layout: PropTypes.object.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default inject('layout')(observer(Toolbar));
