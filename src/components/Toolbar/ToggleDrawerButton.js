import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const ToggleDrawerButton = ({ view }) => (
  <IconButton
    color='inherit'
    aria-label='open drawer'
    onClick={() => view.toggleTempDrawer()}
  >
    <MenuIcon />
  </IconButton>
);

ToggleDrawerButton.propTypes = {
  view: PropTypes.object.isRequired,
};

export default inject('view')(ToggleDrawerButton);
