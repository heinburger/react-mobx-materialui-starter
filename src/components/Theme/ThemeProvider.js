import React from 'react';
import { inject, observer } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { getTheme } from '../../utils/theme';

const ThemeProvider = ({ view, children }) => (
  <MuiThemeProvider theme={getTheme({
    palette: {
      type: view.lightThemeActive ? 'light' : 'dark',
    },
  })}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  view: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default inject('view')(observer(ThemeProvider));
