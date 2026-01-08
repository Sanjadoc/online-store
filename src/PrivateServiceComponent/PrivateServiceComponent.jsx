import { Outlet } from 'react-router-dom';
import { clearCart } from 'store/cart/cartSlice';
import { clearFilters } from 'store/cards/cardsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const PrivateServiceComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCart());
      dispatch(clearFilters());
    };
  }, [dispatch]);

  return <Outlet />;
};
