import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
  },
});

const TempDrawer = ({ view, classes, children }) => (
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
    {children}
  </MuiDrawer>
)

TempDrawer.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  inject('view')(observer(TempDrawer))
);
