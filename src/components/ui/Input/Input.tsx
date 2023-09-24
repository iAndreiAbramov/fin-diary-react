import React, { ChangeEvent, forwardRef, useCallback, useState } from 'react';
import { ReactComponent as HiddenIcon } from 'assets/icons/hidden.svg';
import { ReactComponent as VisibleIcon } from 'assets/icons/visible.svg';

import { IInputProps } from './Input.types';

import * as S from './Input.styled';

const Input = forwardRef<HTMLInputElement | null, IInputProps>(
  (
    { isDisabled = false, isValid = true, value, onChange, placeholder, onBlur, className, type },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChangeVisibility = useCallback(() => {
      setIsPasswordVisible((current) => !current);
    }, []);

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

    switch (type) {
      case 'text':
        return (
          <S.Wrapper className={className} data-testid="input-wrapper">
            <S.Input
              disabled={isDisabled}
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={placeholder || ''}
              onBlur={handleBlur}
              hasIcon={false}
              isValid={isValid}
              ref={ref}
            />
          </S.Wrapper>
        );
      case 'password':
        return (
          <S.Wrapper as="div" className={className} data-testid="input-wrapper">
            <S.Input
              as="input"
              disabled={isDisabled}
              type={isPasswordVisible ? 'text' : 'password'}
              value={value}
              onChange={handleChange}
              placeholder={placeholder || ''}
              onBlur={handleBlur}
              hasIcon
              isValid={isValid}
              ref={ref}
            />
            <S.IconWrapper as="div" onClick={handleChangeVisibility}>
              {isPasswordVisible ? <VisibleIcon /> : <HiddenIcon />}
            </S.IconWrapper>
          </S.Wrapper>
        );
    }
  },
);

export default React.memo(Input);
