import React from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header />
    <div className={styles.layout}>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
    <Footer />
  </>
);
