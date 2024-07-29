import { decrementQuantity, incrementQuantity, removeFromCart } from 'store/cart/actions';
import {
  selectorCartList,
  selectorCartTotalItems,
  selectorCartTotalPrice
} from 'store/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { CartList } from 'components/CartList/CartList';
import styles from './Cart.module.scss';
import { useCallback } from 'react';

export const Cart = () => {
  const dispatch = useDispatch();

  const cartList = useSelector(selectorCartList);
  const totalQuantity = useSelector(selectorCartTotalItems);
  const totalPrice = useSelector(selectorCartTotalPrice);

  const handleIncrement = useCallback((itemId) => {
    dispatch(incrementQuantity(itemId));
  }, []);

  const handleDecrement = useCallback((itemId) => {
    dispatch(decrementQuantity(itemId));
  }, []);

  const handleRemoveItem = useCallback((itemId) => {
    dispatch(removeFromCart(itemId));
  }, []);

  const cartIsEmpty = cartList.length === 0 || typeof cartList === 'undefined';

  if (cartIsEmpty) {
    return (
      <div className={styles.cart}>
        <h1 className={styles.cartTitle}>This is a cart page</h1>
        <span> Your cart is empty</span>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.cartTitle}>This is a cart page</h1>
      <div className={styles.cartSection}>
        <div className={styles.cartInner}>
          <ul className={styles.listTitles}>
            <li>Photo</li>
            <li>Description</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          <CartList
            cards={cartList}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemoveItem={handleRemoveItem}
          />
          <div className={styles.totalBlock}>
            <div className={styles.totalsContainer}>
              <h3 className={styles.totalsTitle}>Order totals</h3>
              <p className={styles.totalsPrice}>
                <span>{totalQuantity} quantity</span>
                <span>{totalPrice.toFixed(2)} UAH</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
