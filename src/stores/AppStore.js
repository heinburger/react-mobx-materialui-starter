import { configure } from 'mobx';

import ViewStore from './ViewStore';
import RouterStore from './RouterStore';

configure({ enforceActions: 'observed' });

export default class AppStore {
  constructor() {
    this.view = new ViewStore(this);
    this.router = new RouterStore(this);
  }
}
