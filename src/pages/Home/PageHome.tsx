import React from 'react';
import { Navigate } from 'react-router-dom';

import { GetRoute } from 'utils/routes/get-route';

const PageHome: React.FC = () => {
  return <Navigate to={GetRoute.Login()} />;
};

export default PageHome;
