import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';

import Menu from '../Menu'

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
  },
});

const TempDrawer = ({ view, classes }) => (
  <MuiDrawer
    variant='temporary'
    anchor='left'
    open={view.tempDrawerOpen}
    onClose={view.toggleTempDrawer}
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    <Menu />
  </MuiDrawer>
)

TempDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  inject('view')(observer(TempDrawer))
);
