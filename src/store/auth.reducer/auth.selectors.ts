import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from 'store/store';
import { FetchStatus } from 'types/common/fetch-status.enum';

const getAuthState = (state: TRootState) => state.accountReducer;

export const selectLoginFetchStatus = createSelector(
  [getAuthState],
  (state) => state.loginFetchStatus,
);

export const selectUserData = createSelector(
  [getAuthState],
  (state) => state.userData || { email: '', id: '' },
);

export const selectLoginErrorMessage = createSelector(
  [getAuthState],
  (state): string | null => state.loginError,
);

export const selectIsLoggedIn = createSelector([getAuthState], (state) => !!state.userData?.id);

export const selectChangePasswordStatus = createSelector(
  [getAuthState],
  (state): FetchStatus => state.changePasswordFetchStatus,
);

export const selectChangePasswordError = createSelector(
  [getAuthState],
  (state): string | null => state.changePasswordError,
);
