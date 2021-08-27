import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList, ContactForm, EditForm } from './components';
import { selIsEditing } from '../../services/additional/selectors';
import styles from './styles.module.css';
import { getContacts } from '../../services/contacts/operations';

export const Contacts = memo(() => {
  const dispatch = useDispatch();
  const isEdit = useSelector(selIsEditing);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div className={styles.container}>
      <ContactList />
      {!isEdit ? <ContactForm /> : <EditForm />}
    </div>
  );
});
