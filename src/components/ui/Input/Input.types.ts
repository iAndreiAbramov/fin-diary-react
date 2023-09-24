export interface IInputProps {
  type: 'text' | 'password';
  isValid?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}
