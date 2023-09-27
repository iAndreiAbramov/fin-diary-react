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
  args: {
    type: 'register',
    onSubmit: (values) => alert(JSON.stringify(values)),
  },
};

export const Login: Story = {
  args: {
    type: 'login',
    onSubmit: (values) => alert(JSON.stringify(values)),
  },
};

export const LoginWithError: Story = {
  args: {
    type: 'login',
    onSubmit: (values) => alert(JSON.stringify(values)),
    backendError: 'Login or password is incorrect',
  },
};
