import { decorate, observable, action, computed } from 'mobx';

import { getScreenWidth, setBodyColor } from '../utils/browser';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  tempDrawerOpen = false;
  screenWidth = getScreenWidth();
  lightThemeActive = true;

  // COMPUTEDS..................................................................
  get showTempDrawer() {
    return this.screenWidth < 960;
  }

  // ACTIONS....................................................................
  onScreenResize = () => {
    this.screenWidth = getScreenWidth();
  }

  toggleTempDrawer = () => {
    this.tempDrawerOpen = !this.tempDrawerOpen;
  }

  closeTempDrawer = () => {
    this.tempDrawerOpen = false;
  }

  toggleLightTheme = () => {
    this.lightThemeActive = !this.lightThemeActive;
  }
}

decorate(ViewStore, {
  tempDrawerOpen: observable,
  screenWidth: observable,
  lightThemeActive: observable,
  showTempDrawer: computed,
  onScreenResize: action,
  toggleTempDrawer: action,
  closeTempDrawer: action,
  toggleLightTheme: action,
});

export default ViewStore;
