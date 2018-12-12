import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import Drawer from './Drawer';
import TempDrawer from './TempDrawer';

const DrawerSwitcher = ({ view }) => view.showTempDrawer
  ? <TempDrawer />
  : <Drawer />;

DrawerSwitcher.propTypes = {
  view: PropTypes.object.isRequired,
}

// this component needs to be wrapped with withRouter because it is a "blocker"
export default withRouter(inject('view')(observer(DrawerSwitcher)));
