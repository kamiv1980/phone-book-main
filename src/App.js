/** @format */

import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Navigator } from './navigator';
import { selAuth } from './services/profile/selectors';

export const App = memo(() => {
  const { isAuth } = useSelector(selAuth);
  return <Navigator isAuth={isAuth} />;
});
