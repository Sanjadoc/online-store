import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { selectorUser } from 'store/user/selectors';

export const PublicRouter = () => {
  const user = useSelector(selectorUser);

  return user ? <Navigate to="/" /> : <Outlet />;
};
