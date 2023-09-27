import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

export interface IButtonProps
  extends Partial<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  displayType: 'primary' | 'alter' | 'outlined' | 'borderless' | 'surroundedIcon';
  text?: string;
  title?: string;
  icon?: ReactElement;
  isReversed?: boolean;
}
