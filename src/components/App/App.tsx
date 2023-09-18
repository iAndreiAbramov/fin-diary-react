import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageDashboard from 'pages/Dashboard';
import PageHome from 'pages/Home';

import { GetRoute } from 'utils/routes/get-route';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={GetRoute.Home()} element={<PageHome />} />
      <Route path={GetRoute.Dashboard()} element={<PageDashboard />} />
    </Routes>
  );
};

export default App;
