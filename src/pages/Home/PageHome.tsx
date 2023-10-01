import React from 'react';
import { Navigate } from 'react-router-dom';

import { GetRoute } from 'utils/routes/get-route';

const isAuthorized = true;

const PageHome: React.FC = () => {
  return isAuthorized ? <Navigate to={GetRoute.Dashboard()} /> : <Navigate to={GetRoute.Login()} />;
};

export default PageHome;
