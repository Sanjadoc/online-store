import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART
} from './types';

const initialState = {
  cartItems: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isProductExist = state.cartItems.some((item) => item.id === action.payload.id);
      const cartItems = isProductExist
        ? state.cartItems.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: ++item.quantity } : item
          )
        : [...state.cartItems, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        cartItems
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };
    }
    case INCREMENT_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: ++item.quantity } : item
        )
      };
    }
    case DECREMENT_QUANTITY: {
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload ? { ...item, quantity: --item.quantity } : item
      );
      const cartItems = updatedItems.filter((item) => item.quantity > 0);
      return {
        ...state,
        cartItems
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};
