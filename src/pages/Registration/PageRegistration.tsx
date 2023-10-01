import React from 'react';

import { LoginLayout } from 'components/atoms/LoginLayout';
import LoginForm from 'components/ui/LoginForm';

const PageRegistration: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm type="register" onSubmit={() => 'registration'} />
    </LoginLayout>
  );
};

export default PageRegistration;
