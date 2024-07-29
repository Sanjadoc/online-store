import { SET_USER, SET_USER_LOGOUT } from './types';

const initialState = {
  user: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_USER_LOGOUT: {
      return {
        ...state,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};
