import { decorate, observable, action, computed } from 'mobx';
import { getScreenWidth } from '../utils';

class LayoutStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  tempDrawerOpen = false;
  shouldHidePermDrawer = false;
  screenWidth = getScreenWidth();

  get showTempDrawer() {
    return this.screenWidth <= 960 || this.shouldHidePermDrawer
  }

  onScreenResize = () => {
    this.screenWidth = getScreenWidth();
  }
}

decorate(LayoutStore, {
  tempDrawerOpen: observable,
  shouldHidePermDrawer: observable,
  screenWidth: observable,
  showTempDrawer: computed,
  onScreenResize: action,
});

export default LayoutStore;
