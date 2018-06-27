import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { inject, observer } from 'mobx-react';

import { Wrapper, Nav, Bar, Content } from '../Layout'

const Root = ({ history, theme, layout }) => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <Wrapper>
        <Bar><div>bar</div></Bar>
        <Nav><div>drawer</div></Nav>
        <Content>
          <div>content</div>
        </Content>
      </Wrapper>
    </MuiThemeProvider>
  </Router>
);

Root.propTypes = {
  layout: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default inject('layout', 'theme', 'history')(observer(Root));
