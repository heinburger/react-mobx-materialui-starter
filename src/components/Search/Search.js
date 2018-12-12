import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  container: {
    position: 'relative',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  input: {
    width: '200px',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    outline: 'none',
    borderRadius: '2px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightLight,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 9}px`,
    marginRight: `${theme.spacing.unit * 2}px`,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.20)',
    },
    '&:focus': {
      width: '250px',
    },
  },
  icon: {
    position: 'absolute',
    height: '34px',
    left: 0,
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
});

const Search = ({ classes }) => (
  <div className={classes.container}>
    <input className={classes.input} />
    <SearchIcon className={classes.icon} />
  </div>
);

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(Search));
