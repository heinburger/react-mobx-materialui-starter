import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

import StoreProvider from './StoreProvider'
import Theme from '../Theme';
import Routes from './Routes';

const App = ({ store }) => (
  <StoreProvider store={store}>
    <React.Fragment>
      <DevTools />
      <Theme>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes />
        </BrowserRouter>
      </Theme>
    </React.Fragment>
  </StoreProvider>
);

export default App;
