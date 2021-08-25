import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { items } from './actions';
import { url } from '../baseUrl';

toast.configure();

export const getContacts = () => (dispatch, getState) => {
  dispatch(items.get.request());

  const token = getState().profile.token;

  const options = {
    method: 'GET',
    url: url.getContacts,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  axios(options)
    .then((res) => dispatch(items.get.success(res)))
    .catch((err) => {
      dispatch(items.get.error(err));
      toast.error(err.message);
    });
};

export const addContact = (name, number) => (dispatch, getState) => {
  dispatch(items.add.request());

  const token = getState().profile.token;

  const options = {
    method: 'POST',
    url: url.addContact,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {
      name,
      number,
    },
  };

  axios(options)
    .then(({ data }) => dispatch(items.add.success(data)))
    .catch((err) => {
      dispatch(items.add.error(err));
      toast.error(err.message);
    });
};

export const deleteContact = (id) => (dispatch, getState) => {
  dispatch(items.delete.request());

  const token = getState().profile.token;

  const options = {
    method: 'DELETE',
    url: url.deleteContact(id),
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {
      id,
    },
  };

  axios(options)
    .then((res) => dispatch(items.delete.success(res)))
    .catch((err) => {
      dispatch(items.delete.error(err));
      toast.error(err.message);
    });
};

export const editContact = (id, name, number) => (dispatch, getState) => {
  dispatch(items.edit.request());

  const token = getState().profile.token;

  const options = {
    method: 'PATCH',
    url: url.editContact(id),
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: {
      name,
      number,
    },
  };

  axios(options)
    .then((res) => dispatch(items.edit.success(res)))
    .catch((err) => {
      dispatch(items.edit.error(err));
      toast.error(err.message);
    });
};
