import { BrowserRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'UI/LoginForm',
  component: LoginForm,
  args: {
    onSubmit: () => alert('submit'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Registration: Story = {
  render: () => (
    <BrowserRouter>
      <LoginForm type="register" onSubmit={(values) => alert(JSON.stringify(values))} />
    </BrowserRouter>
  ),
};

export const Login: Story = {
  render: () => (
    <BrowserRouter>
      <LoginForm type="login" onSubmit={(values) => alert(JSON.stringify(values))} />
    </BrowserRouter>
  ),
};

export const LoginWithError: Story = {
  render: () => (
    <BrowserRouter>
      <LoginForm
        type="login"
        onSubmit={(values) => alert(JSON.stringify(values))}
        backendError="Login or password is incorrect"
      />
    </BrowserRouter>
  ),
};
