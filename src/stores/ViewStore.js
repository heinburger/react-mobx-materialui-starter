import { decorate, observable, action, computed } from 'mobx';

import { getScreenWidth, setBodyColor } from '../utils/browser';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  tempDrawerOpen = false;
  shouldHidePermDrawer = false;
  screenWidth = getScreenWidth();
  lightThemeActive = true;

  // COMPUTEDS..................................................................
  get showTempDrawer() {
    return this.screenWidth <= 960 || this.shouldHidePermDrawer;
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
  shouldHidePermDrawer: observable,
  screenWidth: observable,
  showTempDrawer: computed,
  onScreenResize: action,
  toggleTempDrawer: action,
  closeTempDrawer: action,
});

export default ViewStore;
