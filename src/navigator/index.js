import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp, Contacts } from '../pages';
// import { PrivateRoute } from '../components/PrivateRoute';

const NotAuth = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} />
      <Route exact path="/sign_up" component={SignUp} />
      {/*<PrivateRoute exact patch="/contacts" auth={isAuth} component={Contacts} />*/}
      <Redirect to="/" />
    </Switch>
  );
});

const IsAuth = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
});

export const Navigator = memo(({ isAuth }) => {
  return isAuth ? <IsAuth /> : <NotAuth />;
});
