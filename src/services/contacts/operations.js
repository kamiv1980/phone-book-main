import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { items } from './actions';
import { url } from '../baseUrl';

toast.configure();

export const addContact = (name, number) => (dispatch, getState) => {
  const token = getState().profile.token;

  if (!token) {
    return;
  }
  dispatch(items.add.request());
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
    .then((res) => dispatch(items.add.success(res)))
    .catch((err) => {
      dispatch(items.add.error(err));
      if (err.response.status === 400) {
        toast.error('Contact creation error!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    });
};

export const getContacts = () => (dispatch, getState) => {
  const token = getState().profile.token;

  if (!token) {
    return;
  }
  dispatch(items.get.request());
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
      if (err.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (err.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    });
};

export const delContact = (id) => (dispatch, getState) => {
  const token = getState().profile.token;

  if (!token) {
    return;
  }
  dispatch(items.delete.request());
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
      if (err.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (err.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    });
};

export const editContact = (id, name, number) => (dispatch, getState) => {
  const token = getState().profile.token;

  if (!token) {
    return;
  }
  dispatch(items.edit.request());
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
      if (err.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (err.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    });
};
