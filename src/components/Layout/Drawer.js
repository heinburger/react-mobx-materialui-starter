import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';

const styles = theme => ({
  drawerPaper: {
    width: theme.drawerWidth,
    position: 'relative',
  },
});

const Drawer = ({ classes, children }) => (
  <MuiDrawer
    variant='permanent'
    anchor='left'
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    {children}
  </MuiDrawer>
)

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default withStyles(styles)(Drawer);
