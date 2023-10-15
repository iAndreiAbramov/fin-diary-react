import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageChangePassword from 'pages/ChangePassword';
import PageHome from 'pages/Home';
import PageIncome from 'pages/Income';
import PageLogin from 'pages/Login';
import PageRegistration from 'pages/Registration';
import PageSpending from 'pages/Spending';
import PageSummary from 'pages/Summary';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from 'styles';

import LayoutInner from 'components/containers/LayoutInner';
import PrivateRoute from 'components/containers/PrivateRoute';
import PublicRoute from 'components/containers/PublicRoute';
import { GetRoute } from 'utils/routes/get-route';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={GetRoute.Home()} element={<PageHome />} />
        <Route
          path={GetRoute.Login()}
          element={
            <PublicRoute>
              <PageLogin />
            </PublicRoute>
          }
        />
        <Route
          path={GetRoute.Registration()}
          element={
            <PublicRoute>
              <PageRegistration />
            </PublicRoute>
          }
        />
        <Route
          path={GetRoute.Dashboard()}
          element={
            <PrivateRoute>
              <LayoutInner />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to={GetRoute.Summary()} />} />
          <Route path={GetRoute.Summary()} element={<PageSummary />} />
          <Route path={GetRoute.Spending()} element={<PageSpending />} />
          <Route path={GetRoute.Income()} element={<PageIncome />} />
          <Route path={GetRoute.ChangePassword()} element={<PageChangePassword />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
