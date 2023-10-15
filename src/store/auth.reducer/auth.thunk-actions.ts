import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ILoginRequestBody,
  ILoginResponse,
  IRegistrationRequestBody,
} from 'store/backend-api/types';

import { checkUser, requestLogin, requestRegistration } from './services/auth.service';

export const registerThunkAction = createAsyncThunk(
  'auth/register',
  async (body: IRegistrationRequestBody): Promise<ILoginResponse> => {
    return await requestRegistration(body);
  },
);

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
