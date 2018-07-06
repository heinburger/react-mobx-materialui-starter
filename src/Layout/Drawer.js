import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
});

const Drawer = ({ layout, classes, children }) => (
  <MuiDrawer
    variant={layout.showTempDrawer ? 'temporary' : 'permanent'}
    anchor='left'
    open={layout.showTempDrawer ? layout.tempDrawerOpen : true}
    onClose={layout.toggleTempDrawer}
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
  >
    {children}
  </MuiDrawer>
)

Drawer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  inject('layout')(observer(Drawer))
);
