import React, { forwardRef, useCallback, useState } from 'react';
import { ReactComponent as HiddenIcon } from 'assets/icons/hidden.svg';
import { ReactComponent as VisibleIcon } from 'assets/icons/visible.svg';

import { IInputProps } from './FormInput.types';

import * as S from './FormInput.styled';

const FormInput = forwardRef<HTMLInputElement | null, IInputProps>(
  ({ isValid = true, className, type, labelText, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChangeVisibility = useCallback(() => {
      setIsPasswordVisible((current) => !current);
    }, []);

    switch (type) {
      case 'text':
        return (
          <S.Label as="label" className={className} data-testid="input-wrapper">
            {labelText && <S.LabelText>{labelText}</S.LabelText>}
            <S.FormInput
              as="input"
              {...props}
              type={type}
              isValid={isValid}
              hasIcon={false}
              ref={ref}
            />
          </S.Label>
        );
      case 'password':
        return (
          <S.Label as="label" className={className} data-testid="input-wrapper">
            {labelText && <S.LabelText>{labelText}</S.LabelText>}
            <S.FormInput
              as="input"
              {...props}
              type={isPasswordVisible ? 'text' : 'password'}
              isValid={isValid}
              hasIcon
              ref={ref}
            />
            <S.IconWrapper as="div" onClick={handleChangeVisibility}>
              {isPasswordVisible ? <VisibleIcon /> : <HiddenIcon />}
            </S.IconWrapper>
          </S.Label>
        );
    }
  },
);

export default React.memo(FormInput);
