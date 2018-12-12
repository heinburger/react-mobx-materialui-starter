import React from 'react';
import { Route } from 'react-router-dom';

import { Wrapper, Drawer, Bar, Content } from './Layout';
import Toolbar from './Toolbar';
import Menu from './Menu';
import { colors } from '../utils/theme';

const Routes = () => (
  <Wrapper>
    <Route path='/' render={({ location }) => {
      const routePieces = location.pathname.split('/');
      const routeName = routePieces[routePieces.length - 1];
      return (
        <>
          <Bar color={colors.routes[routeName]}>
            <Toolbar routeName={routeName} />
          </Bar>
          <Drawer><Menu /></Drawer>
        </>
      )
    }} />
    <Content>
      <>
        <Route exact path='/' render={props => (
          <div>root route</div>
        )} />
        <Route path='/:variable' render={props => (
          <div>{props.match.params.variable}</div>
        )} />
      </>
    </Content>
  </Wrapper>
);

export default Routes;
