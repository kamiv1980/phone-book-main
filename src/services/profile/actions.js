/** @format */

export const actionTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',

  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',

  SIGN_OUT_REQUEST: 'SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',

  GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST',
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_ERROR: 'GET_USER_INFO_ERROR',
};

const sign = {
  in: {
    request: () => ({ type: actionTypes.SIGN_IN_REQUEST }),
    success: (payload) => ({ type: actionTypes.SIGN_IN_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.SIGN_IN_ERROR, payload }),
  },
  up: {
    request: () => ({ type: actionTypes.SIGN_UP_REQUEST }),
    success: (payload) => ({ type: actionTypes.SIGN_UP_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.SIGN_UP_ERROR, payload }),
  },
  out: {
    request: () => ({ type: actionTypes.SIGN_OUT_REQUEST }),
    success: (payload) => ({ type: actionTypes.SIGN_OUT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.SIGN_OUT_ERROR, payload }),
  },
};

const get = {
  request: () => ({ type: actionTypes.GET_USER_INFO_REQUEST }),
  success: (payload) => ({ type: actionTypes.GET_USER_INFO_SUCCESS, payload }),
  error: (payload) => ({ type: actionTypes.GET_USER_INFO_ERROR, payload }),
};

export { sign, get };
