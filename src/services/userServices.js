import { USER_LOCAL_STORAGE_LOGIN_KEY, USER_LOCAL_STORAGE_REG_KEY } from 'constants';

import { apiClient } from 'api/apiClient';
import { toast } from 'react-toastify';

export const getUserData = () => {
  try {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_LOGIN_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    toast.error(error.message);
    return null;
  }
};

export const loginUser = async (values) => {
  try {
    const { data } = await apiClient({
      url: '/auth/login',
      method: 'post',
      data: {
        username: values.name,
        password: values.password
      }
    });

    if (data && data.token) {
      localStorage.setItem(USER_LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(data));
      return data;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Invalid user credentials');
    } else {
      throw new Error(error.message || 'An error occurred while logging in');
    }
  }
};

export const regUserData = ({ values, history }) => {
  try {
    window.localStorage.setItem(USER_LOCAL_STORAGE_REG_KEY, JSON.stringify(values));

    history('/login');
  } catch (error) {
    toast.error(error);
  }
};
