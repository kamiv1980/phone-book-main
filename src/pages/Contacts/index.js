import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList, ContactForm, EditForm } from './components';
import { selIsEditing } from '../../services/additional/selectors';
import styles from './styles.module.css';
import { getContacts } from '../../services/contacts/operations';

export const Contacts = memo(({ history }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector(selIsEditing);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={styles.wrapper}>
      <ContactList />
      <div className={styles.container}>
        {!isEdit ? <ContactForm /> : <EditForm />}
        <button onClick={() => history.goBack()} className={styles.button_back}>
          Go Back
        </button>
      </div>
    </div>
  );
});
