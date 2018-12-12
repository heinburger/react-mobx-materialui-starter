import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';

import { colors } from '../../utils/theme';
import Toolbar from '../Toolbar';

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

const Bar = ({ classes, routeName }) => (
  <MuiAppBar
    className={classes.appBar}
    style={{ color: colors.routes[routeName] }}
  >
    <MuiToolbar>
      <Toolbar routeName={routeName} />
    </MuiToolbar>
  </MuiAppBar>
);

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
  routeName: PropTypes.string,
};

export default withStyles(styles)(Bar);
