import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequestBody, ILoginResponse } from 'store/backend-api/types';

import { checkUser, requestLogin } from './services/auth.service';

export const loginThunkAction = createAsyncThunk(
  'auth/login',
  async (body: ILoginRequestBody): Promise<ILoginResponse> => {
    return await requestLogin(body);
  },
);

export const checkUserThunkAction = createAsyncThunk(
  'auth/checkUser',
  async (): Promise<ILoginResponse> => {
    return await checkUser();
  },
);
