import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Test from './Test';

const Body = ({ router }) => (
  <div>
    {router.pathname}
    <Test />
  </div>
);

Body.propTypes = {
  router: PropTypes.object.isRequired,
};

export default inject('router')(observer(Body));
