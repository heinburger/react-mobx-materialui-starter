import { configure } from 'mobx';

import ViewStore from './ViewStore';

configure({ enforceActions: 'observed' });

export default class AppStore {
  constructor() {
    this.view = new ViewStore(this);
  }
}
