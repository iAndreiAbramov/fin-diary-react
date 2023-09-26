import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';
import { IInputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: React.FC<Omit<IInputProps, 'onChange' | 'value'>> = (args) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div style={{ width: '350px' }}>
        <Input {...args} onChange={(value) => setInputValue(value)} value={inputValue} />
        <span style={{ display: 'block', marginTop: '20px' }}>
          Проверка передачи значения наружу:
        </span>
        <span style={{ display: 'block', marginTop: '10px' }}>{inputValue}</span>
      </div>
    </>
  );
};

export const Text: Story = {
  render: () => <Template type="text" placeholder="Enabled" />,
};

export const Password: Story = {
  render: () => <Template type="password" placeholder="Password" />,
};

export const Invalid: Story = {
  render: () => <Template type="text" isValid={false} placeholder="invalid" />,
};

export const Disabled: Story = {
  render: () => <Template type="text" isDisabled={true} placeholder="Disabled" />,
};
