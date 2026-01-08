import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        }
      }
    },
    clearCart(state) {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice;

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
