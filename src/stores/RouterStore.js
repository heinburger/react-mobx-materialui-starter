import { decorate, observable, action } from 'mobx';
import createHistory from 'history/createBrowserHistory';

class RouterStore {
  constructor(appStore) {
    this.appStore = appStore;
    this.history = createHistory({
      basename: process.env.PUBLIC_URL,
    });
    this.setPathname(this.history.location.pathname)
    this.history.listen((location, action) => {
      this.setPathname(location.pathname);
      console.log(`The last navigation action was ${location.pathname} (via ${action})`)
    });
  }

  // OBSERVABLES................................................................
  pathname = ''

  // COMPUTEDS..................................................................
  // get pathname() {
  //   return this.history.location.pathname;
  // }

  // ACTIONS....................................................................
  goTo = (route = '/') => {
    this.history.push(route);
    if (this.appStore.view.showTempDrawer && this.appStore.view.tempDrawerOpen) {
      this.appStore.view.closeTempDrawer();
    }
  }
  setPathname = (pathname) => {
    this.pathname = pathname;
  }
}

decorate(RouterStore, {
  pathname: observable,
  goTo: action,
  setPathname: action,
});

export default RouterStore;
