import React from 'react';
import { Link } from 'react-router-dom';

import { GetRoute } from 'utils/routes/get-route';

const PageHome: React.FC = () => {
  return (
    <div>
      <h2>PageHome</h2>
      <Link to={GetRoute.Dashboard()}>To Dashboard</Link>
    </div>
  );
};

export default PageHome;
