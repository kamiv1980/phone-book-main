import { useSelector } from 'react-redux';
import styles from './styles.module.css';

import { selName } from '../../services/profile/selectors';
import { selCont } from '../../services/contacts/selectors';
import { ContactList, ContactForm, UserMenu, EditForm } from './components';
import { selIsEditing } from '../../services/additional/selectors';

export const Contacts = () => {
  const name = useSelector(selName);
  const isCont = useSelector(selCont);
  const isEdit = useSelector(selIsEditing);

  return (
    <div>
      <h2>Welcome to phonebook {name}</h2>
      <UserMenu />
      <div className={styles.container}>
        {isCont && <ContactList />}
        {isCont && (!isEdit ? <ContactForm /> : <EditForm />)}
      </div>
    </div>
  );
};
