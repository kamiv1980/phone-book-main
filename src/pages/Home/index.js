import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth, selectName } from '../../services/profile/selectors';
import styles from './styless.module.css';

export const Home = memo(() => {
  const { isAuth } = useSelector(selectAuth);
  const name = useSelector(selectName);

  return (
    <div className={styles.wrapper}>
      {!isAuth && <h1>HOME PAGE</h1>}
      {isAuth && (
        <h2>
          {' '}
          Welcome <span className={styles.data}>{name}</span>{' '}
        </h2>
      )}
    </div>
  );
});
