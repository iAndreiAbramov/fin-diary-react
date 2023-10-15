import { AxiosError, AxiosResponse } from 'axios';
import { backendApi } from 'store/backend-api';
import {
  ILoginRequestBody,
  ILoginResponse,
  IRegistrationRequestBody,
} from 'store/backend-api/types';
import { GetEndpoint } from 'store/backend-api/utils';

export const requestRegistration = async (
  body: IRegistrationRequestBody,
): Promise<ILoginResponse> =>
  backendApi
    .post<ILoginResponse, AxiosResponse<ILoginResponse>, IRegistrationRequestBody>(
      GetEndpoint.Register(),
      body,
    )
    .then((res) => res.data)
    .catch((error: AxiosError<{ message: string }>) => {
      throw new Error(error?.response?.data?.message || '');
    });

export const requestLogin = async (body: ILoginRequestBody): Promise<ILoginResponse> =>
  backendApi
    .post<ILoginResponse, AxiosResponse<ILoginResponse>, ILoginRequestBody>(
      GetEndpoint.Login(),
      body,
    )
    .then((res) => res?.data)
    .catch((error: AxiosError<{ message: string }>) => {
      throw new Error(error?.response?.data?.message || '');
    });

export const checkUser = async (): Promise<ILoginResponse> =>
  backendApi
    .post(GetEndpoint.Check())
    .then((res) => res?.data)
    .catch((error: AxiosError<{ message: string }>) => {
      throw new Error(error?.response?.data?.message);
    });
