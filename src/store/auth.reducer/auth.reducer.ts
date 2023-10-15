import { createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from 'store/backend-api/types';
import { FetchStatus } from 'types/common/fetch-status.enum';

import { checkUserThunkAction, loginThunkAction, registerThunkAction } from './auth.thunk-actions';

export interface IAccountState {
  loginFetchStatus: FetchStatus;
  userData: ILoginResponse | null;
  loginError: string | null;
}

const initialState: IAccountState = {
  loginFetchStatus: FetchStatus.Initial,
  userData: null,
  loginError: null,
};

const accountSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.loginFetchStatus = FetchStatus.Initial;
      state.userData = null;
      state.loginError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunkAction.pending, (state) => {
        state.loginFetchStatus = FetchStatus.Progress;
        state.loginError = null;
      })
      .addCase(registerThunkAction.fulfilled, (state, { payload }) => {
        state.loginFetchStatus = FetchStatus.Success;
        state.userData = payload;
      })
      .addCase(registerThunkAction.rejected, (state, { error }) => {
        state.loginFetchStatus = FetchStatus.Error;
        state.userData = null;
        if (error.message) {
          state.loginError = error.message;
        }
      })
      .addCase(loginThunkAction.pending, (state) => {
        state.loginFetchStatus = FetchStatus.Progress;
        state.loginError = null;
      })
      .addCase(loginThunkAction.fulfilled, (state, { payload }) => {
        state.loginFetchStatus = FetchStatus.Success;
        state.userData = payload;
      })
      .addCase(loginThunkAction.rejected, (state, { error }) => {
        state.loginFetchStatus = FetchStatus.Error;
        state.userData = null;
        if (error.message) {
          state.loginError = error.message;
        }
      })
      .addCase(checkUserThunkAction.pending, (state) => {
        state.loginFetchStatus = FetchStatus.Progress;
        state.loginError = null;
      })
      .addCase(checkUserThunkAction.fulfilled, (state, { payload }) => {
        state.loginFetchStatus = FetchStatus.Success;
        state.userData = payload;
      })
      .addCase(checkUserThunkAction.rejected, (state, { error }) => {
        state.loginFetchStatus = FetchStatus.Error;
        state.userData = null;
        if (error.message) {
          state.loginError = error.message;
        }
      });
  },
});

export const { logoutAction } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
