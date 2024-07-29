import { useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Button';
import { logoutUserEffect } from 'store/user/effects';
import { selectorUser } from 'store/user/selectors';

import { selectorCartTotalItems } from 'store/cart/selectors';

import styles from './Header.module.scss';

const menuLinks = [
  { link: '/', title: 'Home' },
  { link: '/cart', title: 'Cart' }
];

export const Header = () => {
  const user = useSelector(selectorUser);
  const dispatch = useDispatch();

  const totalQuantity = useSelector(selectorCartTotalItems);

  const handleLogOut = useCallback(() => {
    dispatch(logoutUserEffect());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <Link to="/">
            <img
              className={styles.logo}
              src="/assets/img/header/shop-logo.svg"
              alt="Logo"
              loading="lazy"
            />
          </Link>
          {user ? (
            <ul className={styles.navList}>
              {menuLinks.map((item) => (
                <li className={styles.item} key={item.title}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    {item.title}
                    {item.link === '/cart' && totalQuantity ? (
                      <span className={styles.inCart}> {totalQuantity}</span>
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}

          {user ? (
            <>
              <div className={styles.user}>{user.name || user.firstName || user.email}</div>
              <div className={styles.logOut}>
                <Button title="LOGOUT" onClick={handleLogOut} />
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};
