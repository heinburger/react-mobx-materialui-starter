import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

const Body = ({ router }) => (
  <div>
    {router.pathname}
  </div>
);

Body.propTypes = {
  router: PropTypes.object.isRequired,
};

export default inject('router')(observer(Body));
