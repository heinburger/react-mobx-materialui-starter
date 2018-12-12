import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import Drawer from './Drawer';
import TempDrawer from './TempDrawer';

const DrawerSwitcher = ({ view }) => view.showTempDrawer
  ? <TempDrawer />
  : <Drawer />;

DrawerSwitcher.propTypes = {
  view: PropTypes.object.isRequired,
}

export default inject('view')(observer(DrawerSwitcher));
