import { decorate, observable, action, computed } from 'mobx';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

import defaults from './defaults';
import { setBodyColor } from '../utils';

class ThemeStore {
  constructor(appStore) {
    this.appStore = appStore;
    this.setThemeBodyColor();
  }

  iconColors = {
    stuff: amber[500],
  };

  routeColors = {
    stuff: amber,
  }

  setThemeBodyColor = () => {
    setBodyColor(this.settings.bodyColor[this.settings.palette.type]);
  }

  // OBSERVABLES................................................................
  settings = defaults;

  // COMPUTEDS..................................................................
  get currentTheme() {
    return createMuiTheme(this.settings);
  }

  // ACTIONS....................................................................
  toggleLightTheme = () => {
    this.settings.palette.type = this.settings.palette.type === 'light'
      ? 'dark'
      : 'light';
    this.setThemeBodyColor();
  }
}

decorate(ThemeStore, {
  settings: observable,
  currentTheme: computed,
  toggleLightTheme: action,
});

export default ThemeStore;
