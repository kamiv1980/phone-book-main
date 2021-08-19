/** @format */
import { actionTypes } from './actions';

const initialState = {
  email: '',
  name: '',
  token: '',
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.GET_USER_INFO_SUCCESS:
      return { ...state, ...payload };
    case actionTypes.SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
