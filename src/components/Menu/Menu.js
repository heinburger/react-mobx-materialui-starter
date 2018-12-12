import React from 'react';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import Items from './Items';

const Menu = () => (
  <React.Fragment>
    <Header />
    <Divider />
    <Items />
  </React.Fragment>
);

export default Menu;
