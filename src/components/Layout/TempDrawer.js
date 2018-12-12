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

const StyledMuiDrawer = withStyles(styles)(({ classes, ...rest }) => (
  <MuiDrawer
    variant='temporary'
    anchor='left'
    classes={{
      paper: classes.drawerPaper,
    }}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    {...rest}
  />
));

const TempDrawer = ({ view, children }) => (
  <StyledMuiDrawer
    open={view.tempDrawerOpen}
    onClose={view.toggleTempDrawer}
  >
    {children}
  </StyledMuiDrawer>
)

TempDrawer.propTypes = {
  view: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default inject('view')(observer(TempDrawer));
