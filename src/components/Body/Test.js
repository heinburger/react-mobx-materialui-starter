import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';

const styles = theme => ({
  title: Object.assign({}, theme.mixins.gutters(), {
    flex: '1 1 auto',
  }),
});

const StyledTest = withStyles(styles)(({ classes, ...rest }) => (
  <div className={classes.title} {...rest} />
));

const Test = ({ view }) => (
  <StyledTest>
    {view.title}
  </StyledTest>
);

Test.propTypes = {
  view: PropTypes.object.isRequired,
};

export default inject('view')(observer(Test));
