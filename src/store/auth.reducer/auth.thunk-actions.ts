import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginRequestBody, ILoginResponse } from 'store/backend-api/types';

import { requestLogin } from './services/auth.service';

export const loginThunkAction = createAsyncThunk(
  'auth/login',
  async (body: ILoginRequestBody): Promise<ILoginResponse | void> => {
    return await requestLogin(body);
  },
);
