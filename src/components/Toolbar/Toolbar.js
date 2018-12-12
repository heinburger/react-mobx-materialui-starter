import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { capitalize } from '../../utils/text';

import Title from './Title';
import ToggleDrawerButton from './ToggleDrawerButton';
import ToggleLightThemeButton from './ToggleLightThemeButton';
import GithubLinkButton from './GithubLinkButton';
import Search from '../Search';

const Toolbar = ({ view, routeName }) => (
  <>
    {view.showTempDrawer
      ? <ToggleDrawerButton />
      : <React.Fragment />}
    <Title title={
      capitalize(routeName)
    }/>
    <Search />
    <ToggleLightThemeButton />
    <GithubLinkButton />
  </>
);

Toolbar.propTypes = {
  view: PropTypes.object.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default inject('view')(observer(Toolbar));
