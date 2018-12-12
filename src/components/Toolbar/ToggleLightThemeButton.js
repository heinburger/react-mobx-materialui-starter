import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import LightbulbOutline from '@material-ui/icons/LightbulbOutline';

const ToggleLightThemeButton = ({ view }) => (
  <IconButton
    color='inherit'
    aria-label='toggle light theme'
    onClick={() => view.toggleLightTheme()}
  >
    <LightbulbOutline />
  </IconButton>
);

ToggleLightThemeButton.propTypes = {
  view: PropTypes.object.isRequired,
};

export default inject('view')(ToggleLightThemeButton);
