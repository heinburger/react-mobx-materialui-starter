import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const ToggleDrawerButton = ({ layout }) => (
  <IconButton
    color='inherit'
    aria-label='open drawer'
    onClick={() => layout.toggleTempDrawer()}
  >
    <MenuIcon />
  </IconButton>
);

ToggleDrawerButton.propTypes = {
  layout: PropTypes.object.isRequired,
};

export default inject('layout')(ToggleDrawerButton);
