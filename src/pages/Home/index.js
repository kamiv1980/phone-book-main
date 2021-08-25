import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Contacts } from '../Contacts';
import { selAuth } from '../../services/profile/selectors';
import styles from './styless.module.css';

export const Home = memo(() => {
  const { isAuth } = useSelector(selAuth);

  return (
    <div className={styles.navbar}>
      {!isAuth && <h1>HOME PAGE</h1>}
      {!isAuth && (
        <Link to="/sign_in" className={styles.link}>
          Sign In
        </Link>
      )}
      {!isAuth && (
        <Link to="/sign_up" className={styles.link}>
          Sign Up
        </Link>
      )}
      {isAuth && <Contacts />}
    </div>
  );
});
