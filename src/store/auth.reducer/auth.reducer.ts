import { createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from 'store/backend-api/types';
import { FetchStatus } from 'types/fetch-status.enum';

import { loginThunkAction } from './auth.thunk-actions';

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunkAction.pending, (state) => {
        state.loginFetchStatus = FetchStatus.Progress;
        state.loginError = null;
      })
      .addCase(loginThunkAction.fulfilled, (state, { payload }) => {
        state.loginFetchStatus = FetchStatus.Success;
        if (payload) {
          state.userData = payload;
        }
      })
      .addCase(loginThunkAction.rejected, (state, { error }) => {
        state.loginFetchStatus = FetchStatus.Error;
        state.userData = null;
        if (error.message) {
          state.loginError = error.message;
        }
      });
  },
});

export const accountReducer = accountSlice.reducer;
