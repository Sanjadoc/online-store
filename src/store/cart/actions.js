import { actionCreator } from 'helpers/actionCreator';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART
} from './types';

export const addToCart = actionCreator(ADD_TO_CART);
export const removeFromCart = actionCreator(REMOVE_FROM_CART);
export const incrementQuantity = actionCreator(INCREMENT_QUANTITY);
export const decrementQuantity = actionCreator(DECREMENT_QUANTITY);
export const clearCart = actionCreator(CLEAR_CART);
