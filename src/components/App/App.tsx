import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PageCabinet from 'pages/Cabinet';
import PageDashboard from 'pages/Dashboard';
import PageHome from 'pages/Home';
import PageLogin from 'pages/Login';
import PageRegistration from 'pages/Registration';
import { store } from 'store/store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from 'styles';

import Layout from 'components/containers/Layout';
import PrivateRoute from 'components/containers/PrivateRoute';
import PublicRoute from 'components/containers/PublicRoute';
import { GetRoute } from 'utils/routes/get-route';

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
