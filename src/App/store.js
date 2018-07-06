import { configure } from 'mobx';

import LayoutStore from '../Layout/store';
import ThemeStore from '../Theme/store';

configure({ enforceActions: true });

export default class AppStore {
  constructor() {
    this.layout = new LayoutStore(this);
    this.theme = new ThemeStore(this);
  }
}
