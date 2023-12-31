import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth.reducer/auth.selectors';

import { GetRoute } from 'utils/routes/get-route';

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={GetRoute.Dashboard()} /> : <>{children}</>;
};

export default PublicRoute;
