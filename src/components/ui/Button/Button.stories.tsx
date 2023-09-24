import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    text: 'Button',
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const handleButtonClick = (): void => alert('click');

export const Primary: Story = {
  args: {
    type: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
  },
};

export const Alter: Story = {
  args: {
    type: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
  },
};

export const AlterDisabled: Story = {
  args: {
    type: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
  },
};
