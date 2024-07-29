const { useState, useEffect } = require('react');
const { useDispatch } = require('react-redux');
const { Outlet } = require('react-router-dom');

const { Loader } = require('components/Loader');

import { fetchUserData } from 'store/user/effects';

export const RootWrapperComponent = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUserData());
    setLoading(false);
  }, []);

  return isLoading ? <Loader /> : <Outlet />;
};
