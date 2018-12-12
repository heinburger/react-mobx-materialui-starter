import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: Object.assign({}, theme.mixins.gutters(), {
    backgroundColor: theme.palette.background.default,
    flex: '1 1 auto',
  }),
})

const Content = ({ classes, children, disableGutters }) => (
  <main className={!disableGutters && classes.content}>
    <div className={classes.toolbar} />
    {children}
  </main>
)

Content.propTypes = {
  disableGutters: PropTypes.bool,
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content);
