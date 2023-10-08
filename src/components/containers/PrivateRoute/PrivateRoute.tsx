import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth.reducer/auth.selectors';

import { GetRoute } from 'utils/routes/get-route';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to={GetRoute.Login()} /> : <>{children}</>;
};

export default PrivateRoute;
