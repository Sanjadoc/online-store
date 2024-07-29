import { Dna } from 'react-loader-spinner';

import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <Dna />
  </div>
);
