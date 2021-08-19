import axios from 'axios';

import { sign } from './actions';
import { url } from '../baseUrl';

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
    .catch((err) => dispatch(sign.in.error(err)));
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
