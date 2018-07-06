import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: Object.assign({}, theme.mixins.gutters(), {
    flex: '1 1 auto',
  }),
});

const Title = ({ classes, title }) => (
  <Typography
    className={classes.title}
    variant='title'
    color='inherit'
    noWrap
  >
    {title}
  </Typography>
);

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Title);
