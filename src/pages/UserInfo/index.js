import React, { memo, useEffect } from 'react';

import { getUser } from '../../services/profile/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectName } from '../../services/profile/selectors';
import styles from './styles.module.css';

export const UserInfo = memo(({ history }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        User name: <span className={styles.data}>{name}</span>{' '}
      </h3>
      <h3 className={styles.title}>
        User email: <span className={styles.data}>{email}</span>{' '}
      </h3>
      <button onClick={() => history.goBack()} className={styles.button_back}>
        Go Back
      </button>
    </div>
  );
});
