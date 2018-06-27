import createBrowserHistory from 'history/createBrowserHistory';
import { createMuiTheme } from '@material-ui/core/styles'

import themeDefaults from './themeDefaults'
import LayoutStore from '../Layout/store';

export default class AppStore {
  constructor() {
    this.history = createBrowserHistory();
    this.theme = createMuiTheme(themeDefaults);
    this.layout = new LayoutStore(this);
  }
}
