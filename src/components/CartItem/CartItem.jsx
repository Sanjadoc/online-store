import { memo, useCallback } from 'react';

import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

const placeholderImgSrc = 'assets/img/not-found.png';

export const CartItem = memo(({ id, title, quantity, price, thumbnail, ...methods }) => {
  const { onIncrement, onDecrement, onRemoveItem } = methods;

  const incrementHandler = useCallback(() => {
    onIncrement(id);
  }, []);

  const decrementHandler = useCallback(() => {
    onDecrement(id);
  }, []);

  const removeItemHandler = useCallback(() => {
    onRemoveItem(id);
  }, []);

  return (
    <li className={styles.item}>
      <img
        className={styles.itemImg}
        src={thumbnail ?? placeholderImgSrc}
        alt={title}
        loading="lazy"
      />
      <div className={styles.itemInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.articul}>Articul: {id}</p>
      </div>
      <p className={styles.price}>{price} UAH</p>
      <p className={styles.quantity}>
        <Button className={`${styles.quantityBtn} ${styles.decrement}`} onClick={decrementHandler}>
          -
        </Button>
        <span>{quantity}</span>
        <Button className={`${styles.quantityBtn} ${styles.increment}`} onClick={incrementHandler}>
          +
        </Button>
      </p>
      <p className={styles.total}>{(price * quantity).toFixed(2)} UAH</p>

      <Button className={styles.removeBtn} onClick={removeItemHandler}>
        X
      </Button>
    </li>
  );
});

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};
