import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { Route } from 'react-router-dom';
import { Wrapper, Drawer, Bar, Content } from '../Layout';
import Toolbar from '../Toolbar';
import Menu from '../Menu';

const Routes = ({ theme }) => (
  <Wrapper>
    <Route path='/' render={({ location }) => {
      const routePieces = location.pathname.split('/');
      const routeName = routePieces[routePieces.length - 1];
      return (
        <React.Fragment>
          <Bar color={theme.routeColors[routeName]}>
            <Toolbar routeName={routeName} />
          </Bar>
          <Drawer><Menu /></Drawer>
        </React.Fragment>
      )
    }} />
    <Content>
      <Route exact path='/' render={props => (
        <div>root route</div>
      )} />
      <Route path='/:variable' render={props => (
        <div>{props.match.params.variable}</div>
      )} />
    </Content>
  </Wrapper>
);

Routes.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default inject('theme')(Routes);
