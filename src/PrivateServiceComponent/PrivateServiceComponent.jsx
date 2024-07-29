import { useEffect } from 'react';
const { useDispatch } = require('react-redux');
const { Outlet } = require('react-router-dom');

import { clearFilters } from 'store/cards/actions';
import { clearCart } from 'store/cart/actions';

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
