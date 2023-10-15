import React from 'react';
import { useSelector } from 'react-redux';
import {
  loginThunkAction,
  selectLoginErrorMessage,
  selectLoginFetchStatus,
} from 'store/auth.reducer';
import { useAppDispatch } from 'store/store';
import { FetchStatus } from 'types/common/fetch-status.enum';
import { ILoginFormValues } from 'types/common/login-form-values.interface';

import { LoginLayout } from 'components/atoms/LoginLayout';
import LoginForm from 'components/ui/LoginForm';

const PageLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const loginStatus = useSelector(selectLoginFetchStatus);
  const loginErrorMessage = useSelector(selectLoginErrorMessage);

  const handleSubmit = (values: ILoginFormValues): void => {
    void dispatch(loginThunkAction(values));
  };

  return (
    <LoginLayout>
      <LoginForm
        type="login"
        onSubmit={handleSubmit}
        isSubmitting={loginStatus === FetchStatus.Progress}
        isSuccess={loginStatus === FetchStatus.Success}
        isError={loginStatus === FetchStatus.Error}
        backendError={loginErrorMessage}
      />
    </LoginLayout>
  );
};

export default PageLogin;
