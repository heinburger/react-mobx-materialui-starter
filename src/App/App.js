import React from 'react';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';

import Root from './Root';

const App = ({ store }) => (
  <Provider
    history={store.history}
    theme={store.theme}
    layout={store.layout}
  >
    <Root />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
