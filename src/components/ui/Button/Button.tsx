import React from 'react';

import { IButtonProps } from './Button.types';

import * as S from './Button.styled';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      type = 'primary',
      text = '',
      title = '',
      icon,
      onClick,
      isDisabled = false,
      isReversed = false,
      className,
      testId,
    },
    ref,
  ) => {
    switch (type) {
      case 'alter':
        return (
          <S.AlterButton
            ref={ref}
            onClick={() => onClick()}
            disabled={isDisabled}
            title={title}
            className={className}
            data-testid={testId}
          >
            {isReversed ? (
              <>
                {text && text}
                {icon && icon}
              </>
            ) : (
              <>
                {icon && icon}
                {text && text}
              </>
            )}
          </S.AlterButton>
        );
      case 'outlined':
        return (
          <S.OutlinedButton
            ref={ref}
            onClick={() => onClick()}
            disabled={isDisabled}
            title={title}
            className={className}
            data-testid={testId}
          >
            {isReversed ? (
              <>
                {text && text}
                {icon && icon}
              </>
            ) : (
              <>
                {icon && icon}
                {text && text}
              </>
            )}
          </S.OutlinedButton>
        );
      case 'borderless':
        return (
          <S.BorderlessButton
            ref={ref}
            onClick={() => onClick()}
            disabled={isDisabled}
            title={title}
            className={className}
            data-testid={testId}
          >
            {isReversed ? (
              <>
                {text && text}
                {icon && icon}
              </>
            ) : (
              <>
                {icon && icon}
                {text && text}
              </>
            )}
          </S.BorderlessButton>
        );
      case 'surroundedIcon':
        return (
          <S.SurroundedIcon
            ref={ref}
            onClick={() => onClick()}
            disabled={isDisabled}
            title={title}
            className={className}
            data-testid={testId}
          >
            {icon && icon}
          </S.SurroundedIcon>
        );
      case 'primary':
        return (
          <S.PrimaryButton
            ref={ref}
            onClick={() => onClick()}
            disabled={isDisabled}
            title={title}
            className={className}
            data-testid={testId}
          >
            {isReversed ? (
              <>
                {text && text}
                {icon && icon}
              </>
            ) : (
              <>
                {icon && icon}
                {text && text}
              </>
            )}
          </S.PrimaryButton>
        );
    }
  },
);

export default React.memo(Button);
