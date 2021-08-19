/** @format */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, SignIn, SignUp } from './pages';

export const App = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/sign_up" component={SignUp} />
    </Switch>
  );
});
