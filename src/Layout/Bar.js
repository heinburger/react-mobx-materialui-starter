import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  appBar: {
    right: 0,
    left: 'auto',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
    },
  },
});

const Bar = ({ layout, classes, theme, children, color }) => (
  <MuiAppBar
    className={classes.appBar}
    style={{
      color: color ? theme.currentTheme.palette.getContrastText(color[500]) : undefined,
      backgroundColor: color ? color[theme.currentTheme.palette.type === 'dark' ? 700 : 300] : undefined,
      width: layout.showTempDrawer
        ? '100%'
        : `calc(100% - ${theme.currentTheme.drawerWidth}px)`,
    }}
  >
    <MuiToolbar>
      {children}
    </MuiToolbar>
  </MuiAppBar>
);

Bar.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  color: PropTypes.object
};

export default withStyles(styles)(
  inject('layout', 'theme')(observer(Bar))
);
