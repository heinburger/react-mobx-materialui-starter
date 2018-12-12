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

const Bar = ({ classes, children }) => (
  <MuiAppBar
    className={classes.appBar}
  >
    <MuiToolbar>
      {children}
    </MuiToolbar>
  </MuiAppBar>
);

Bar.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
