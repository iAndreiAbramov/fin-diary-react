import React, { useCallback } from 'react';

import { IButtonProps } from './Button.types';

import * as S from './Button.styled';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      displayType = 'primary',
      text = '',
      title = '',
      icon,
      handleClick,
      isDisabled = false,
      isReversed = false,
      className,
      testId,
      ...props
    },
    ref,
  ) => {
    const handleButtonClick = useCallback((): void => {
      if (typeof handleClick !== 'undefined') {
        handleClick();
      }
    }, [handleClick]);

    switch (displayType) {
      case 'alter':
        return (
          <S.AlterButton
            {...props}
            ref={ref}
            onClick={handleButtonClick}
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
            {...props}
            ref={ref}
            onClick={handleButtonClick}
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
            {...props}
            ref={ref}
            onClick={handleButtonClick}
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
            {...props}
            ref={ref}
            onClick={handleButtonClick}
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
            {...props}
            ref={ref}
            onClick={handleButtonClick}
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
