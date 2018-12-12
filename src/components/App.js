import React from 'react';
import DevTools from 'mobx-react-devtools';

import StoreProvider from './StoreProvider'
import Theme from './Theme';
import Toolbar from './Toolbar';
import Menu from './Menu';
import { Wrapper, DrawerSwitcher, Bar, Content } from './Layout';
import Body from './Body';

const App = ({ store }) => (
  <StoreProvider store={store}>
    <>
      {process.env !== 'production' && <DevTools />}
      <Theme>
        <Wrapper>
          <Bar><Toolbar /></Bar>
          <DrawerSwitcher><Menu /></DrawerSwitcher>
          <Content>
            <Body />
          </Content>
        </Wrapper>
      </Theme>
    </>
  </StoreProvider>
);

export default App;
