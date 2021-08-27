import axios from 'axios';

import { sign, get } from './actions';
import { url } from '../baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const signIn = (email, password) => (dispatch) => {
  dispatch(sign.in.request());

  const options = {
    method: 'POST',
    url: url.signIn,
    data: {
      email,
      password,
    },
  };

  axios(options)
    .then(({ data: { token, user } }) => dispatch(sign.in.success({ token, ...user })))
    .catch((err) => {
      dispatch(sign.in.error(err));
      toast.error(err.message);
    });
};

export const signUp = (name, email, password) => (dispatch) => {
  dispatch(sign.up.request());

  const options = {
    method: 'POST',
    url: url.signUp,
    data: {
      name,
      email,
      password,
    },
  };

  axios(options)
    .then(({ data: { token, user } }) => dispatch(sign.up.success({ token, ...user })))
    .catch((err) => {
      dispatch(sign.up.error(err));
      toast.error(err.message);
    });
};

export const signOut = () => (dispatch, getState) => {
  dispatch(sign.out.request());

  const token = getState().profile.token;

  const options = {
    method: 'POST',
    url: url.signOut,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  axios(options)
    .then((res) => dispatch(sign.out.success(res)))
    .catch((err) => dispatch(sign.out.error(err)));
};

export const getUser = () => (dispatch, getState) => {
  const token = getState().profile.token;

  if (!token) {
    return;
  }
  dispatch(get.request());
  const options = {
    method: 'GET',
    url: url.getUserInfo,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  axios(options)
    .then((res) => dispatch(get.success(res)))
    .catch((err) => {
      dispatch(get.error(err));
      toast.error(err.message);
    });
};
