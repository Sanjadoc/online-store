import PropTypes from 'prop-types';

import { CartItem } from 'components/CartItem';

import styles from './CartList.module.scss';

export const CartList = ({ cards, ...methods }) => (
  <>
    {cards?.length ? (
      <ul className={styles.cartList}>
        {cards.map((item) => (
          <CartItem key={item.id} {...item} {...methods} />
        ))}
      </ul>
    ) : (
      <div className={styles.cardListEmpty}>
        <p>Your cart is empty </p>
      </div>
    )}
  </>
);

CartList.propTypes = {
  cards: PropTypes.array,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};
