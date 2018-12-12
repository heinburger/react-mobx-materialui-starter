import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import Drawer from './Drawer';
import TempDrawer from './TempDrawer';

const DrawerSwitcher = ({ view, children }) => {
  return view.showTempDrawer
    ? <TempDrawer>{children}</TempDrawer>
    : <Drawer>{children}</Drawer>;
};

DrawerSwitcher.propTypes = {
  children: PropTypes.element.isRequired,
  view: PropTypes.object.isRequired,
}

export default inject('view')(observer(DrawerSwitcher));
