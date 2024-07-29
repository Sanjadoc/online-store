import React from 'react';

import styles from './NotFound.module.scss';

export const NotFound = () => (
  <div className={styles.notFound}>
    <h1>This page does not exist :(. Sorry, go to another pages!</h1>
    <p>404</p>
  </div>
);
