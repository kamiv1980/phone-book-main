import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactList, ContactForm, UserMenu, EditForm } from './components';
import { selName } from '../../services/profile/selectors';
import { selIsEditing } from '../../services/additional/selectors';
import styles from './styles.module.css';
import { getContacts } from '../../services/contacts/operations';

export const Contacts = memo(() => {
  const dispatch = useDispatch();
  const name = useSelector(selName);
  const isEdit = useSelector(selIsEditing);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div>
      <h2>Welcome to phonebook {name}</h2>
      <UserMenu />
      <div className={styles.container}>
        <ContactList />
        {!isEdit ? <ContactForm /> : <EditForm />}
      </div>
    </div>
  );
});
