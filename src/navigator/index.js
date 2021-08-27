import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp, Contacts, UserInfo } from '../pages';

const NotAuth = memo(() => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_in" exact component={SignIn} />
      <Route path="/sign_up" exact component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
});

const IsAuth = memo(() => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/about_user" exact component={UserInfo} />
      <Redirect to="/" />
    </Switch>
  );
});

export const Navigator = memo(({ isAuth }) => {
  return isAuth ? <IsAuth /> : <NotAuth />;
});
