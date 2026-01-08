import { Navigate, Outlet } from 'react-router-dom';

import { selectorUser } from 'store/user/userSlice';
import { useSelector } from 'react-redux';

export const PublicRouter = () => {
  const user = useSelector(selectorUser);

  return user ? <Navigate to="/" /> : <Outlet />;
};
