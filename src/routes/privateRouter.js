import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { selectorUser } from 'store/user/selectors';

export const PrivateRouter = () => {
  const user = useSelector(selectorUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
