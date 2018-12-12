import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';

import Menu from '../Menu'

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
    position: 'relative',
  },
});

const Drawer = ({ classes }) => (
  <MuiDrawer
    variant='permanent'
    anchor='left'
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Menu />
  </MuiDrawer>
)

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Drawer);
