import { useEffect, useState } from 'react';

import { Loader } from 'components/Loader';
import { Outlet } from 'react-router-dom';
import { fetchUserData } from 'store/user/effects';
import { useDispatch } from 'react-redux';

export const RootWrapperComponent = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      await dispatch(fetchUserData());
      setIsInitialized(true);
      setLoading(false);
    };

    initializeAuth();
  }, [dispatch]);

  if (isLoading || !isInitialized) {
    return <Loader />;
  }

  return <Outlet />;
};
