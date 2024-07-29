import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { userReducer } from './user/reducer';
import { cardsReducer } from './cards/reducer';
import { productReducer } from './product/reducer';
import { cartReducer } from './cart/reducer';
import { categoriesReducer } from './categories/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cards: cardsReducer,
  cart: cartReducer,
  categories: categoriesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
