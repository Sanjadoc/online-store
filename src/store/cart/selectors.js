import { createSelector } from 'reselect';

const getCartState = (state) => state.cart;

export const selectorCartList = createSelector([getCartState], (cartState) => cartState.cartItems);

export const selectorCartTotalItems = createSelector([selectorCartList], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectorCartTotalPrice = createSelector([selectorCartList], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);

export const selectorIsItemInCart = (itemId) =>
  createSelector([selectorCartList], (cartItems) => cartItems.some((item) => item.id === itemId));
