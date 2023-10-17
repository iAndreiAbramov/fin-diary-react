import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  changePasswordThunkAction,
  selectChangePasswordError,
  selectChangePasswordStatus,
  selectUserData,
} from 'store/auth.reducer';
import { useAppDispatch } from 'store/store';
import { FetchStatus } from 'types/common/fetch-status.enum';
import { IChangePasswordFormValues } from 'types/forms/change-password-form-values.interface';

import ChangePasswordForm from 'components/ui/ChangePasswordForm';

const PageChangePassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const changePasswordStatus = useSelector(selectChangePasswordStatus);
  const changePasswordError = useSelector(selectChangePasswordError);
  const { id } = useSelector(selectUserData);

  const handleChangePassword = useCallback(
    ({ password, oldPassword }: IChangePasswordFormValues) => {
      void dispatch(changePasswordThunkAction({ oldPassword, newPassword: password, id }));
    },
    [dispatch, id],
  );

  return (
    <ChangePasswordForm
      onSubmit={handleChangePassword}
      isSubmitting={changePasswordStatus === FetchStatus.Progress}
      isError={changePasswordStatus === FetchStatus.Error}
      isSuccess={changePasswordStatus === FetchStatus.Success}
      backendError={changePasswordError}
    />
  );
};

export default PageChangePassword;
