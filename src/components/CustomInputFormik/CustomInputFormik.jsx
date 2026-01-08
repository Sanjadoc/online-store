import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './CustomInputFormik.module.scss';
import { useField } from 'formik';

export const CustomInputFormik = ({ label, clearable = false, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleClearClick = () => {
    helpers.setValue('');
  };

  return (
    <div className={styles.fieldContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.inputError : styles.input}
      />
      {meta.touched && meta.error && <div className={styles.fieldError}>{meta.error}</div>}
      {clearable && (
        <Button className={styles.button} onClick={handleClearClick}>
          x
        </Button>
      )}
    </div>
  );
};

CustomInputFormik.propTypes = {
  label: PropTypes.string,
  clearable: PropTypes.bool
};
