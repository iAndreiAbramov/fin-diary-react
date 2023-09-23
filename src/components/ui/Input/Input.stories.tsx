import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';
import { IInputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: React.FC<Omit<IInputProps, 'onChange'>> = (args) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div style={{ width: '350px' }}>
        <Input {...args} onChange={(value) => setInputValue(value)} value={inputValue} />
        <span style={{ display: 'block', marginTop: '20px', color: 'crimson' }}>
          Проверка передачи значения наружу:
        </span>
        <span style={{ display: 'block', marginTop: '10px', color: 'crimson' }}>{inputValue}</span>
      </div>
    </>
  );
};

export const Primary: Story = {
  render: () => <Template value="" />,
};
