import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
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
  onMenuItemClick = (path) => {
    const { history, view } = this.props;
    history.push(path);
    view.closeTempDrawer();
  }
  render() {
    const { classes, location } = this.props;
    return (
      <List className={classes.root}>
        <MenuItem
          onClick={() => this.onMenuItemClick('/stuff')}
          selected={location.pathname === '/stuff'}
          icon={<Inbox style={{color: colors.icons.stuff}} />}
          title={'Stuff'}
        />
        <Divider className={classes.divider} />
        <MenuItem
          onClick={() => this.onMenuItemClick('/other')}
          selected={location.pathname === '/other'}
          icon={<Gesture />}
          title={'More stuff'}
        />
      </List>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  withRouter(inject('view')(Items))
);
