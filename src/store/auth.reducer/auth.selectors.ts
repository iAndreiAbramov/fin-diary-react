import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from 'store/store';

const getAuthState = (state: TRootState) => state.accountReducer;

export const selectLoginFetchStatus = createSelector(
  [getAuthState],
  (state) => state.loginFetchStatus,
);

export const selectUserData = createSelector(
  [getAuthState],
  (state) => state.userData || { email: '', id: '' },
);

export const selectLoginErrorMessage = createSelector([getAuthState], (state) => state.loginError);

export const selectIsLoggedIn = createSelector([getAuthState], (state) => !!state.userData?.id);
