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
  root: {
    width: '100%',
    paddingBottom: `${theme.spacing.unit * 8}px`,
  },
  divider: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Items extends React.Component {
  render() {
    const { classes, router } = this.props;
    return (
      <List className={classes.root}>
        <MenuItem
          onClick={() => router.goTo('/stuff')}
          selected={router.pathname === '/stuff'}
          icon={<Inbox style={{color: colors.icons.stuff}} />}
          title={'Stuff'}
        />
        <Divider className={classes.divider} />
        <MenuItem
          onClick={() => router.goTo('/other')}
          selected={router.pathname === '/other'}
          icon={<Gesture />}
          title={'More stuff'}
        />
      </List>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  inject('router')(observer(Items))
);
