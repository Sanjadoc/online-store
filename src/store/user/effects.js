import { getUserData, loginUser } from 'services/userServices';
import { setUser, setUserLogout } from './userSlice';

import { USER_LOCAL_STORAGE_LOGIN_KEY } from 'constants';

export const fetchUserData = () => async (dispatch) => {
  try {
    const user = getUserData();
    dispatch(setUser(user));
    // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-undef
  window.localStorage.removeItem(USER_LOCAL_STORAGE_LOGIN_KEY);
  dispatch(setUserLogout());
};
