/** @format */
import { actionTypes } from './actions';

const initialState = {
  hasContacts: false,
  data: [],
};

export function contactsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...payload, hasContacts: true };

    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, data: [...state.data, payload] };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, data: state.data.filter(({ id }) => id !== payload) };

    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        data: state.data.map((contact) => (contact.id === payload.id ? payload : contact)),
      };

    default:
      return state;
  }
}

const notes = {
  filter: '',
  modal: false,
  editItem: { id: '', name: '', number: '' },
};

export function notesReducer(state = notes, action) {
  switch (action.type) {
    case actionTypes.NEW_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case actionTypes.NEW_MODAL:
      return {
        ...state,
        modal: (state.modal = action.payload.modal),
      };
    case actionTypes.NEW_ITEM:
      return {
        ...state,
        editItem: action.payload.editItem,
      };

    default:
      return state;
  }
}
