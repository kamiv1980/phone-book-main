import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ContactList, ContactForm, UserMenu, EditForm } from './components';
import { selName } from '../../services/profile/selectors';
import { selectorHasContacts } from '../../services/contacts/selectors';
import { selIsEditing } from '../../services/additional/selectors';
import styles from './styles.module.css';

export const Contacts = memo(() => {
  const name = useSelector(selName);
  const hasContacts = useSelector(selectorHasContacts);
  const isEdit = useSelector(selIsEditing);

  return (
    <div>
      <h2>Welcome to phonebook {name}</h2>
      <UserMenu />
      <div className={styles.container}>
        {hasContacts && <ContactList />}
        {hasContacts && (!isEdit ? <ContactForm /> : <EditForm />)}
      </div>
    </div>
  );
});
