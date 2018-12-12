import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  drawerHeader: Object.assign({}, theme.mixins.toolbar, {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${theme.spacing.unit * 2}px`,
    overflow: 'hidden',
  }),
  headline: {
    flex: '1 1 auto',
    cursor: 'pointer',
    display: 'flex',
    color: theme.palette.text.secondary,
    alignItems: 'center',
    paddingBottom: 0,
    marginTop: `${theme.spacing.unit * 0.5}px`,
    lineHeight: '1.25rem',
    '&:hover': {
      color: theme.palette.secondary[theme.palette.type],
      textDecoration: 'underline'
    }
  },
  caption: {
    flex: '1 1 auto',
  },
  icon: {
    marginRight: `${theme.spacing.unit}px`,
  },
});

const Header = ({ classes, router }) => (
  <div className={classes.drawerHeader}>
    <Typography
      className={classes.headline}
      variant='h5'
      noWrap
      onClick={() => router.goTo('/')}
    >
      Boilerplate
    </Typography>
    <Typography className={classes.caption} variant='caption' noWrap>
      v0.2.0
    </Typography>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

export default withStyles(styles)(inject('router')(Header));
