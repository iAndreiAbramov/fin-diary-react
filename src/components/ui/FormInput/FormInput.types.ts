import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInputProps
  extends Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
  type: 'text' | 'password';
  labelText?: string;
  isInvalid?: boolean;
  classname?: string;
}
