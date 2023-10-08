import { Simulate } from 'react-dom/test-utils';
import { AxiosError, AxiosResponse } from 'axios';
import { backendApi } from 'store/backend-api';
import { ILoginRequestBody, ILoginResponse } from 'store/backend-api/types';
import { GetEndpoint } from 'store/backend-api/utils';
import error = Simulate.error;

export const requestLogin = async (body: ILoginRequestBody): Promise<ILoginResponse | void> =>
  backendApi
    .post<ILoginResponse, AxiosResponse<ILoginResponse>, ILoginRequestBody>(
      GetEndpoint.Login(),
      body,
    )
    .then((res) => res?.data)
    .catch((error: AxiosError<{ message: string }>) => {
      throw new Error(error?.response?.data?.message);
    });
