/** @format */

import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { selEditContact } from '../../../../services/additional/selectors';
import { editContact } from '../../../../services/contacts/operations';
import { newComponent } from '../../../../services/additional/actions';

export const EditForm = memo(() => {
  const item = useSelector(selEditContact);
  const [name, setName] = useState(item.name);
  const [number, setNumber] = useState(item.number);
  const dispatch = useDispatch();
  const onEditContact = (id, name, number) => dispatch(editContact(id, name, number));

  const handleName = ({ currentTarget: { value } }) => setName(value);
  const handleNumber = ({ currentTarget: { value } }) => setNumber(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEditContact(item.id, name, number);
    dispatch(newComponent(false));
  };
  const handleCancel = () => dispatch(newComponent(false));

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Name</label>
      <input type="text" name="name" value={name} className={styles.input} onChange={handleName} />
      <label className={styles.label}>Number</label>
      <input type="text" name="number" value={number} className={styles.input} onChange={handleNumber} />
      <div className={styles.actions}>
        <button className={styles.button}>Update contact</button>
        <button className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
});
