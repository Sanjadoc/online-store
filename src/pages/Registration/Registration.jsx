import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LinkButton } from 'components/LinkButton';
import { FormShop } from 'components/FormShop';

import { regUserData } from 'services/userServices';

import styles from './Registration.module.scss';

export const Registration = () => {
  const history = useNavigate();

  const handleSubmit = useCallback((values) => {
    regUserData({ values, history });
  });

  return (
    <div className={styles.registrationPage}>
      <h1>Registration Page</h1>
      <FormShop handleSubmit={handleSubmit} btnTitle="Registration" />
      <p>If you are registered user, you can go to login form</p>
      <LinkButton title="Login form" to="/login" />
    </div>
  );
};
