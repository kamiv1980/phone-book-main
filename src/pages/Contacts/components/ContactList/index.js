/** @format */
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { selContacts } from '../../../../services/contacts/selectors';
import { delContact } from '../../../../services/contacts/operations';
import { newComponent, newEditItem } from '../../../../services/additional/actions';

export const ContactList = () => {
  const contacts = useSelector(selContacts);
  const dispatch = useDispatch();

  const onEditBtn = (user) => {
    dispatch(newEditItem(user));
    dispatch(newComponent(true));
  };
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
        {contacts.length > 0 ? (
          contacts.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>
                <button
                  onClick={() => {
                    onEditBtn(user);
                  }}
                  className="button muted-button"
                >
                  <EditIcon />
                </button>
                <button onClick={() => dispatch(delContact(user.id))} className="button muted-button">
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
};
