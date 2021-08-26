import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp, Contacts } from '../pages';

const NotAuth = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/sign_up" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
});

const IsAuth = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact patch="/contacts" component={Contacts} />
      <Redirect to="/" />
    </Switch>
  );
});

export const Navigator = memo(({ isAuth }) => {
  return isAuth ? <IsAuth /> : <NotAuth />;
});
