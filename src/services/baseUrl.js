export const baseUrl = 'https://connections-api.herokuapp.com';

export const url = {
  signIn: baseUrl + '/users/login',
  signUp: baseUrl + '/users/signup',
  signOut: baseUrl + '/users/logout',
  getUserInfo: baseUrl + '/users/current',
  getContacts: baseUrl + '/contacts',
  addContact: baseUrl + '/contacts',
  deleteContact: (id) => baseUrl + `/contacts/${id}`,
  editContact: (id) => baseUrl + `/contacts/${id}`,
};
