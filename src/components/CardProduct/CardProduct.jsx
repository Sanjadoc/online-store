import { useCallback, useMemo } from 'react';

import { Button } from 'components/Button';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectorIsItemInCart } from 'store/cart/selectors';
import styles from './Card.module.scss';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const placeholderImgSrc = 'assets/img/not-found-img-1.png';

export const CardProduct = (card) => {
  const { id, title, category, price, thumbnail, stock, description, addToCartHandler } = card;

  const isItemInCart = useSelector(selectorIsItemInCart(id));

  const buttonClassName = useMemo(() => (isItemInCart ? styles.cardActiveBtn : ''), [isItemInCart]);

  const addToCartClickHandler = useCallback((e) => {
    e.preventDefault();
    addToCartHandler(card);
    toast.success(`${title} added to cart!`);
  }, []);

  return (
    <li className={styles.card}>
      <NavLink to={`/products/${id}`}>
        <div className={styles.cardBox}>
          <img
            className={styles.cardImg}
            src={thumbnail ?? placeholderImgSrc}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardCategory}>Category: {category}</p>
          <p>Articul: {id}</p>
          {stock && <p>Stock: {stock}</p>}
          <p className={styles.cardPrice}>Price: {price} UAH</p>
          <p className={styles.cardDescription}>
            <span>Description:</span> {description}
          </p>
          <div className={styles.cardActions}>
            <Button
              title={!isItemInCart ? 'Add to cart' : 'In cart'}
              onClick={addToCartClickHandler}
              className={buttonClassName}
            />
          </div>
        </div>
      </NavLink>
    </li>
  );
};

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number,
  description: PropTypes.string,
  addToCartHandler: PropTypes.func.isRequired
};
