import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

const defaults = {
  bodyColor: {
    dark: grey['A400'],
    light: grey[50],
  },
  palette: {
    primary: teal,
    type: 'light'
  },
  drawerWidth: 240,
};

export const colors = {
  icons: {
    stuff: amber[500],
  },
  routes: {
    stuff: amber,
  },
};

export const getTheme = (overrides = {}) => {
  return createMuiTheme(
    Object.assign(
      {},
      defaults,
      overrides,
      {
        typography: {
          useNextVariants: true,
        },
      },
    )
  );
}


// setBodyColor(this.settings.bodyColor[this.settings.palette.type]);
// this.settings.palette.type = this.settings.palette.type === 'light'
//   ? 'dark'
//   : 'light';
