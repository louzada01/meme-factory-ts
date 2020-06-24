import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={() => <h1>404 - Not found page</h1>} />
    </Switch>
  );
};

export default Routes;
