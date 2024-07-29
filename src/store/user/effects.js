import { getUserData, loginUser } from 'services/userServices';
import { logOut, setUser } from './actions';

import { USER_LOCAL_STORAGE_LOGIN_KEY } from 'constants';

export const fetchUserData = () => async (dispatch) => {
  try {
    const user = await getUserData();
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setUser(null));
  }
};

export const loginUserEffect = (value) => async (dispatch) => {
  try {
    const user = await loginUser(value);
    dispatch(setUser(user));
  } catch (error) {
    return { message: error.message || 'An error occurred during login' };
  }

  return null;
};

export const logoutUserEffect = () => (dispatch) => {
  window.localStorage.removeItem(USER_LOCAL_STORAGE_LOGIN_KEY);
  dispatch(logOut());
};
