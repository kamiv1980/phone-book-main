/** @format */
import { actionTypes } from './actions';

const notes = {
  component: false,
  editItem: { id: '', name: '', number: '' },
};

export function notesReducer(state = notes, action) {
  switch (action.type) {
    case actionTypes.NEW_COMPONENT:
      return {
        ...state,
        component: (state.component = action.payload.component),
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
