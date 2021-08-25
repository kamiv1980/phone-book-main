/** @format */

import { combineReducers } from 'redux';

import { profileReducer } from './profile/reducer';
import { contactsReducer } from './contacts/reducer';
import { notesReducer } from './additional/reducer';
import { overlayReducer } from './overlay/reducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  contacts: contactsReducer,
  additional: notesReducer,
  overlay: overlayReducer,
});
