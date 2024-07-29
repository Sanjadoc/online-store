import { memo } from 'react';

import styles from './Footer.module.scss';

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>Shop &copy; {currentYear}</p>
      </div>
    </footer>
  );
});
