import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import AppStore from './App/store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App store={ new AppStore() }/>,
  document.getElementById('root')
);

registerServiceWorker();
