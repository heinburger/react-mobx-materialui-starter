import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';
import AppStore from './stores/AppStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App store={ new AppStore() }/>,
  document.getElementById('root')
);

// enable offline: unregister() to register()
serviceWorker.unregister();
