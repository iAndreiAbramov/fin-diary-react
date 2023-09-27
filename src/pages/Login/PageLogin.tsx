import React from 'react';

import { LoginLayout } from 'components/atoms/LoginLayout';
import LoginForm from 'components/ui/LoginForm';

const PageLogin: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm type="login" onSubmit={() => alert('login')} />
    </LoginLayout>
  );
};

export default PageLogin;
