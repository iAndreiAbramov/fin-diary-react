import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth.reducer';

import { GetRoute } from 'utils/routes/get-route';

const PageHome: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={GetRoute.Dashboard()} /> : <Navigate to={GetRoute.Login()} />;
};

export default PageHome;
