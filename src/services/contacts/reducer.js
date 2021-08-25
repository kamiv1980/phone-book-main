/** @format */
import { actionTypes } from './actions';

const initialState = {
  isCont: false,
  data: [],
};

export function contactsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...payload, isCont: true };

    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, data: [...state.data, ...payload] };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, data: state.data.filter((contact) => contact.id !== payload.id) };

    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        data: state.data.map((contact) =>
          contact.id === payload.id ? { ...contact, name: payload.name, number: payload.number } : contact,
        ),
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

export function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_REQUEST:
      return { ...state, state: true };
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return { ...state, state: false };
    case actionTypes.FETCH_CONTACTS_ERROR:
      return { ...state, state: false };
    case actionTypes.ADD_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.ADD_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.ADD_CONTACT_ERROR:
      return { ...state, state: false };
    case actionTypes.DELETE_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.DELETE_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.DELETE_CONTACT_ERROR:
      return { ...state, state: false };
    case actionTypes.EDIT_CONTACT_REQUEST:
      return { ...state, state: true };
    case actionTypes.EDIT_CONTACT_SUCCESS:
      return { ...state, state: false };
    case actionTypes.EDIT_CONTACT_ERROR:
      return { ...state, state: false };

    default:
      return state;
  }
}
