import React from 'react';
import Router from 'react-router';
import routes from './routes';
require('../style/index.less');

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
