import type { Meta, StoryObj } from '@storybook/react';

import Input from './FormInput';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enabled',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};

export const Invalid: Story = {
  args: {
    type: 'text',
    placeholder: 'Invalid',
    isValid: false,
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Enabled',
    disabled: true,
  },
};
