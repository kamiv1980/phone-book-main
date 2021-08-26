/** @format */

export const actionTypes = {
  GET_CONTACTS_REQUEST: 'GET_CONTACTS_REQUEST',
  GET_CONTACTS_SUCCESS: 'GET_CONTACTS_SUCCESS',
  GET_CONTACTS_ERROR: 'GET_CONTACTS_ERROR',

  ADD_CONTACT_REQUEST: 'ADD_CONTACT_REQUEST',
  ADD_CONTACT_SUCCESS: 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_ERROR: 'ADD_CONTACT_ERROR',

  DELETE_CONTACT_REQUEST: 'DELETE_CONTACT_REQUEST',
  DELETE_CONTACT_SUCCESS: 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR: 'DELETE_CONTACT_ERROR',

  EDIT_CONTACT_REQUEST: 'EDIT_CONTACT_REQUEST',
  EDIT_CONTACT_SUCCESS: 'EDIT_CONTACT_SUCCESS',
  EDIT_CONTACT_ERROR: 'EDIT_CONTACT_ERROR',
};

export let items = {
  get: {
    request: () => ({ type: actionTypes.GET_CONTACTS_REQUEST }),
    success: (payload) => ({ type: actionTypes.GET_CONTACTS_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.GET_CONTACTS_ERROR, payload }),
  },
  add: {
    request: () => ({ type: actionTypes.ADD_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.ADD_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.ADD_CONTACT_ERROR, payload }),
  },
  delete: {
    request: () => ({ type: actionTypes.DELETE_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.DELETE_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.DELETE_CONTACT_ERROR, payload }),
  },
  edit: {
    request: () => ({ type: actionTypes.EDIT_CONTACT_REQUEST }),
    success: (payload) => ({ type: actionTypes.EDIT_CONTACT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.EDIT_CONTACT_ERROR, payload }),
  },
};
