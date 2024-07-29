import { CardProduct } from 'components/CardProduct/CardProduct';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './CardList.module.scss';

export const CardsList = ({ cards, addToCartHandler }) => {
  const cardsListComponents = cards?.map((item) => (
    <CardProduct key={item.id} {...item} addToCartHandler={addToCartHandler} />
  ));

  return (
    <>
      {cards?.length ? (
        <ul className={styles.cardList}>{cardsListComponents}</ul>
      ) : (
        <div className={styles.cardListEmpty}>
          <p>Sorry, we don&apos;t have any products at the moment!</p>
        </div>
      )}
    </>
  );
};

CardsList.propTypes = {
  cards: PropTypes.array.isRequired,
  addToCartHandler: PropTypes.func.isRequired
};
