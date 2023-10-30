import type { Meta, StoryObj } from '@storybook/react';

import FormInput from './FormInput';

const meta: Meta<typeof FormInput> = {
  title: 'UI/FormInput',
  component: FormInput,
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
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled',
    disabled: true,
  },
};
