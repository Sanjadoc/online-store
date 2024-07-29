import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { Button } from 'components/Button';
import { CustomInputFormik } from 'components/CustomInputFormik';

import { FormSchema } from './validator/FormSchema';

import styles from './FormShop.module.scss';

export const initialFormState = {
  name: '',
  email: '',
  password: ''
};

export const FormShop = ({ btnTitle, handleSubmit, isRegister = true }) => {
  return (
    <div className={styles.formShop}>
      <Formik
        initialValues={initialFormState}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
        enableReinitialize>
        {({ isValid, status, isSubmitting }) => (
          <>
            <Form className={styles.form}>
              {status?.loginError && (
                <div className={styles.formShopError}>{status.loginError}</div>
              )}
              <CustomInputFormik
                label="Login name"
                name="name"
                type="text"
                placeholder="Enter your login name"
              />

              {isRegister && (
                <CustomInputFormik
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              )}
              <CustomInputFormik
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <Button title={btnTitle} type="submit" disabled={!isValid || isSubmitting} />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

FormShop.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnTitle: PropTypes.string.isRequired,
  isRegister: PropTypes.bool
};
