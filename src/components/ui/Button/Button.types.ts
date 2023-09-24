import { ReactElement } from 'react';

export interface IButtonProps {
  type: 'primary' | 'alter' | 'outlined' | 'borderless' | 'surroundedIcon';
  text?: string;
  title?: string;
  icon?: ReactElement;
  isReversed?: boolean;
  isDisabled?: boolean;
  onClick: (value?: string) => void;
  className?: string;
  testId?: string;
}
