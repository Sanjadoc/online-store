import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from './types';

const initialState = {
  categories: [],
  isLoading: false
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default: {
      return state;
    }
  }
};
