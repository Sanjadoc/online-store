import {
  selectorCardsLoading,
  selectorFilteredCardsList,
  selectorFilters
} from 'store/cards/selectors';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardsList } from 'components/CardList/CardList';
import { FILTER_DELAY_TIMEOUT } from 'constants';
import { Loader } from 'components/Loader';
import { ProductFilters } from 'components/ProductFilters';
import { addToCart } from 'store/cart/actions';
import { debounce } from 'lodash';
import { fetchCardsList } from 'store/cards/effects';
import styles from './Home.module.scss';
import { updateFilters } from 'store/cards/actions';

export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorCardsLoading);
  const filteredProducts = useSelector(selectorFilteredCardsList);
  const initFilterValues = useSelector(selectorFilters);

  const debouncedFetch = useCallback(
    debounce((term) => {
      dispatch(fetchCardsList(term));
    }, FILTER_DELAY_TIMEOUT),
    [dispatch]
  );

  useEffect(() => {
    debouncedFetch(initFilterValues.searchTerm);
    return () => debouncedFetch.cancel();
  }, [initFilterValues.searchTerm, debouncedFetch]);

  const onFiltersChange = useCallback(
    (newFilters) => {
      dispatch(updateFilters(newFilters));
    },
    [dispatch]
  );

  const addToCartHandler = useCallback(
    (item) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );

  const storeFiltersValues = { ...initFilterValues, searchTerm: initFilterValues.searchTerm };

  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>Welcome to our Shop!</h1>
      <ProductFilters storeFiltersValues={storeFiltersValues} onFiltersChange={onFiltersChange} />
      {isLoading ? (
        <Loader />
      ) : (
        <CardsList cards={filteredProducts} addToCartHandler={addToCartHandler} />
      )}
    </div>
  );
};
