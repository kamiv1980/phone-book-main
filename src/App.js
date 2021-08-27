/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Navigator } from './navigator';
import { selectAuth } from './services/profile/selectors';
import { NavBar } from './components';

export const App = memo(() => {
  const { isAuth } = useSelector(selectAuth);

  return (
    <>
      <NavBar isAuth={isAuth} />
      <Navigator isAuth={isAuth} />
    </>
  );
});
