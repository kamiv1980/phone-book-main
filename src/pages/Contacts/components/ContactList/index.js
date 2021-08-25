/** @format */
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { selectorContacts } from '../../../../services/contacts/selectors';
import { deleteContact } from '../../../../services/contacts/operations';
import { newComponent, newEditItem } from '../../../../services/additional/actions';
import styles from './styles.module.css';

export const ContactList = memo(() => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectorContacts);

  const handleEdit = (user) => () => {
    dispatch(newEditItem(user));
    dispatch(newComponent(true));
  };

  const handleDelete = (id) => () => dispatch(deleteContact(id));

  console.log('contacts', contacts);
  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!!contacts.length ? (
          contacts.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>
                <button onClick={handleEdit(user)} className="button muted-button">
                  <EditIcon />
                </button>
                <button onClick={handleDelete(user.id)} className="button muted-button">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
});
