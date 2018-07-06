import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  itemText: {
    padding: 0,
  },
  selected: {
    backgroundColor: theme.palette.action.hover,
  },
});

const Item = ({onClick, classes, icon, title, selected, disabled}) => (
  <ListItem
    button
    disabled={disabled}
    className={selected ? classes.selected : ''}
    onClick={onClick}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText className={classes.itemText} secondary={title} />
  </ListItem>
);

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(Item);
