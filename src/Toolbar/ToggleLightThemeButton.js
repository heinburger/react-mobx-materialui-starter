import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import LightbulbOutline from '@material-ui/icons/LightbulbOutline';

const ToggleLightThemeButton = ({ theme }) => (
  <IconButton
    color='inherit'
    aria-label='toggle light theme'
    onClick={() => theme.toggleLightTheme()}
  >
    <LightbulbOutline />
  </IconButton>
);

ToggleLightThemeButton.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default inject('theme')(ToggleLightThemeButton);
