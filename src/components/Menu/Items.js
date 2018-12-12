import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Gesture from '@material-ui/icons/Gesture';
import Inbox from '@material-ui/icons/Inbox';

import { colors } from '../../utils/theme'
import MenuItem from './Item';

const styles = theme => ({
  list: {
    width: '100%',
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  divider: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const StyledList = withStyles(styles)(({ classes, ...rest }) => (
  <List className={classes.list} {...rest} />
));

const StyledDivider = withStyles(styles)(({ classes, ...rest }) => (
  <Divider className={classes.divider} {...rest} />
));

const Items = ({ router }) => (
  <StyledList>
    <MenuItem
      onClick={() => router.goTo('/stuff')}
      selected={router.pathname === '/stuff'}
      icon={<Inbox style={{color: colors.icons.stuff}} />}
      title={'Stuff'}
    />
    <StyledDivider />
    <MenuItem
      onClick={() => router.goTo('/other')}
      selected={router.pathname === '/other'}
      icon={<Gesture />}
      title={'More stuff'}
    />
  </StyledList>
);

Items.propTypes = {
  router: PropTypes.object.isRequired,
}

export default inject('router')(observer(Items));
