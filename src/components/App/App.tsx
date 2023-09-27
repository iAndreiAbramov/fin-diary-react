import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageDashboard from 'pages/Dashboard';
import PageHome from 'pages/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles,lightTheme } from 'styles';

import { GetRoute } from 'utils/routes/get-route';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={GetRoute.Home()} element={<PageHome />} />
        <Route path={GetRoute.Dashboard()} element={<PageDashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
