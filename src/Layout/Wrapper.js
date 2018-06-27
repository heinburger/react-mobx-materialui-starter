import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react'
import { withStyles } from '@material-ui/core/styles';
import EventListener from 'react-event-listener';

const styles = theme => ({
  wrapper: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

const Wrapper = ({ classes, children, layout }) => (
  <div className={classes.wrapper}>
    {children}
    <EventListener target='window' onResize={layout.onScreenResize} />
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  classes: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
};

export default inject('layout')(withStyles(styles)(Wrapper));
