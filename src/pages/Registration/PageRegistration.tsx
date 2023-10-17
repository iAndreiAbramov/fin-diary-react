import React from 'react';
import { useSelector } from 'react-redux';
import {
  registerThunkAction,
  selectLoginErrorMessage,
  selectLoginFetchStatus,
} from 'store/auth.reducer';
import { useAppDispatch } from 'store/store';
import { FetchStatus } from 'types/common/fetch-status.enum';
import { ILoginFormValues } from 'types/forms/login-form-values.interface';

import { LoginLayout } from 'components/atoms/LoginLayout';
import LoginForm from 'components/ui/LoginForm';

const PageRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const loginStatus = useSelector(selectLoginFetchStatus);
  const loginErrorMessage = useSelector(selectLoginErrorMessage);

  const handleRegister = ({ email, passwordConfirmation, password }: ILoginFormValues): void => {
    const registerValues = {
      email,
      password,
      passwordConfirmation: passwordConfirmation || '',
    };

    void dispatch(registerThunkAction(registerValues));
  };

  return (
    <LoginLayout>
      <LoginForm
        type="register"
        onSubmit={handleRegister}
        backendError={loginErrorMessage}
        isSubmitting={loginStatus === FetchStatus.Progress}
        isSuccess={loginStatus === FetchStatus.Success}
        isError={loginStatus === FetchStatus.Error}
      />
    </LoginLayout>
  );
};

export default PageRegistration;
