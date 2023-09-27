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
    displayType: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    displayType: 'primary',
    onClick: handleButtonClick,
    text: 'Button',
    disabled: true,
    icon: <Plus />,
  },
};

export const Alter: Story = {
  args: {
    displayType: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const AlterDisabled: Story = {
  args: {
    displayType: 'alter',
    onClick: handleButtonClick,
    text: 'Button',
    disabled: true,
    icon: <Plus />,
  },
};

export const Outlined: Story = {
  args: {
    displayType: 'outlined',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    displayType: 'outlined',
    onClick: handleButtonClick,
    text: 'Button',
    disabled: true,
    icon: <Plus />,
  },
};

export const Borderless: Story = {
  args: {
    displayType: 'borderless',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const BorderlessDisabled: Story = {
  args: {
    displayType: 'borderless',
    onClick: handleButtonClick,
    text: 'Button',
    disabled: true,
    icon: <Plus />,
  },
};

export const SurroundedIcon: Story = {
  args: {
    displayType: 'surroundedIcon',
    onClick: handleButtonClick,
    text: 'Button',
    icon: <Plus />,
  },
};

export const SurroundedIconDisabled: Story = {
  args: {
    displayType: 'surroundedIcon',
    onClick: handleButtonClick,
    text: 'Button',
    disabled: true,
    icon: <Plus />,
  },
};
