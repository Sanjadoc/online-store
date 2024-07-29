import { actionCreator } from 'helpers/actionCreator';
import { SET_USER, SET_USER_LOGOUT } from './types';

export const setUser = actionCreator(SET_USER);
export const logOut = actionCreator(SET_USER_LOGOUT);
