import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import AppStore from './App/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App store={ new AppStore() }/>,
  document.getElementById('root')
);

// enable offline: unregister() to register()
serviceWorker.unregister();
