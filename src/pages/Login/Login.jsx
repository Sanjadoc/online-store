import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { FormShop } from 'components/FormShop';
import { LinkButton } from 'components/LinkButton';

import { loginUserEffect } from 'store/user/effects';

import styles from './Login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (values, { setStatus }) => {
    const response = await dispatch(loginUserEffect(values));
    if (response !== null) {
      setStatus({ loginError: response.message });
    }
  });

  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
      <FormShop handleSubmit={handleSubmit} btnTitle="Login" isRegister={false} />
      <p>Or, you can register</p>
      <LinkButton title="Registration form" to="/register" />
    </div>
  );
};
