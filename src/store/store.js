import cardsSlice from './cards/cardsSlice';
import cartSlice from './cart/cartSlice';
import categoriesSlice from './categories/categoriesSlice';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product/productSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
    cards: cardsSlice.reducer,
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
