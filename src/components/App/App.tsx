import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageCabinet from 'pages/Cabinet';
import PageDashboard from 'pages/Dashboard';
import PageHome from 'pages/Home';
import PageLogin from 'pages/Login';
import PageRegistration from 'pages/Registration';
import { checkUserThunkAction } from 'store/auth.reducer';
import { useAppDispatch } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from 'styles';

import Layout from 'components/containers/Layout';
import PrivateRoute from 'components/containers/PrivateRoute';
import PublicRoute from 'components/containers/PublicRoute';
import { GetRoute } from 'utils/routes/get-route';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => void dispatch(checkUserThunkAction()), 0);
    return () => clearTimeout(timeout);
  }, [dispatch]);

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
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<PageDashboard />} />
          <Route path={GetRoute.Cabinet()} element={<PageCabinet />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
