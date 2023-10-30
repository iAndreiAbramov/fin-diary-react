import { createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from 'store/backend-api/types';
import { FetchStatus } from 'types/common/fetch-status.enum';

import {
  changePasswordThunkAction,
  checkUserThunkAction,
  loginThunkAction,
  registerThunkAction,
} from './auth.thunk-actions';

export interface IAccountState {
  loginFetchStatus: FetchStatus;
  userData: ILoginResponse | null;
  loginError: string | null;
  changePasswordFetchStatus: FetchStatus;
  changePasswordError: string | null;
}

const initialState: IAccountState = {
  loginFetchStatus: FetchStatus.Initial,
  userData: null,
  loginError: null,
  changePasswordFetchStatus: FetchStatus.Initial,
  changePasswordError: null,
};

const accountSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.loginFetchStatus = FetchStatus.Initial;
      state.changePasswordFetchStatus = FetchStatus.Initial;
      state.userData = null;
      state.loginError = null;
      state.changePasswordError = null;
    },
    resetChangePasswordStateAction: (state) => {
      state.changePasswordFetchStatus = FetchStatus.Initial;
      state.changePasswordError = null;
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
      .addCase(changePasswordThunkAction.pending, (state) => {
        state.loginFetchStatus = FetchStatus.Progress;
        state.loginError = null;
      })
      .addCase(changePasswordThunkAction.fulfilled, (state) => {
        state.loginFetchStatus = FetchStatus.Success;
      })
      .addCase(changePasswordThunkAction.rejected, (state, { error }) => {
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

export const { logoutAction, resetChangePasswordStateAction } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
