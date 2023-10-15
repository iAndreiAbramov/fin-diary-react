import React from 'react';

import ChangePasswordForm from 'components/ui/ChangePasswordForm';

import * as S from './PageChangePassword.styled';

const PageChangePassword: React.FC = () => {
  return <ChangePasswordForm onSubmit={() => alert('submit')} />;
};

export default PageChangePassword;
