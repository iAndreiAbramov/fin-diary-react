import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectLoginFetchStatus } from 'store/auth.reducer/auth.selectors';
import { FetchStatus } from 'types/common/fetch-status.enum';

import { GetRoute } from 'utils/routes/get-route';

import * as S from './PrivateRoute.styled';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loginStatus = useSelector(selectLoginFetchStatus);

  if (loginStatus === FetchStatus.Progress) {
    return <S.FallbackElement></S.FallbackElement>;
  }

  return !isLoggedIn ? <Navigate to={GetRoute.Login()} /> : <>{children}</>;
};

export default PrivateRoute;
