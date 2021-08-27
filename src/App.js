/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Navigator } from './navigator';
import { selectAuth } from './services/profile/selectors';
import { Loader, NavBar } from './components';
import { selectorIsLoading } from './services/overlay/selectors';

export const App = memo(() => {
  const isAuth = useSelector(selectAuth);
  const { isLoading } = useSelector(selectorIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <NavBar isAuth={isAuth} />
      <Navigator isAuth={isAuth} />
    </>
  );
});
