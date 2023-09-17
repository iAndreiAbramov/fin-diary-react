import React from 'react';
import { Link } from 'react-router-dom';

import { GetRoute } from 'utils/routes/get-route';

const PageDashboard: React.FC = () => {
  return (
    <div>
      <h2>Page Dashboard</h2>
      <Link to={GetRoute.Home()}>To Home page</Link>
    </div>
  );
};

export default PageDashboard;
