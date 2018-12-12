import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: Object.assign({}, theme.mixins.gutters(), {
    flex: '1 1 auto',
  }),
});

const Title = ({ classes, view }) => (
  <Typography
    className={classes.title}
    variant='h6'
    color='inherit'
    noWrap
  >
    {view.title}
  </Typography>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
};

export default withStyles(styles)(
  inject('view')(observer(Title))
);
