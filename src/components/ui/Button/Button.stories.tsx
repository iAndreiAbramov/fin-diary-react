import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    text: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const handleButtonClick = (): void => alert('click');

export const Primary: Story = {
  args: {
    type: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
    icon: <Plus />,
  },
};

export const Alter: Story = {
  args: {
    type: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const AlterDisabled: Story = {
  args: {
    type: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
    icon: <Plus />,
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    type: 'outlined',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
    icon: <Plus />,
  },
};

export const Borderless: Story = {
  args: {
    type: 'borderless',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const BorderlessDisabled: Story = {
  args: {
    type: 'borderless',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
    icon: <Plus />,
  },
};

export const SurroundedIcon: Story = {
  args: {
    type: 'surroundedIcon',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const SurroundedIconDisabled: Story = {
  args: {
    type: 'surroundedIcon',
    onClick: handleButtonClick,
    text: 'Button',
    isDisabled: true,
    icon: <Plus />,
  },
};
