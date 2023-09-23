import React, { ChangeEvent, forwardRef, useCallback } from 'react';

import { IInputProps } from './Input.types';

import * as S from './Input.styled';

const Input = forwardRef<HTMLInputElement | null, IInputProps>(
  ({ isDisabled = false, value, onChange, placeholder, onBlur, className }, ref) => {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>): void => {
        onChange(e.currentTarget.value);
      },
      [onChange],
    );

    const handleBlur = useCallback(() => {
      if (onBlur) {
        return onBlur();
      }
    }, [onBlur]);

    return (
      <S.Wrapper className={className} data-testid="input-wrapper">
        <S.Input
          disabled={isDisabled}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ''}
          onBlur={handleBlur}
          ref={ref}
        />
      </S.Wrapper>
    );
  },
);

export default React.memo(Input);
