import React, { useCallback } from 'react';

import { IButtonProps } from './Button.types';

import * as S from './Button.styled';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      displayType,
      text = '',
      title = '',
      icon,
      isReversed = false,
      className,
      ...props
    },
    ref,
  ) => {
    switch (displayType) {
      case 'primary':
        return (
          <S.PrimaryButton
            {...props}
            ref={ref}
            title={title}
            className={className}
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
      case 'alter':
        return (
          <S.AlterButton
            {...props}
            ref={ref}
            title={title}
            className={className}
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
            title={title}
            className={className}
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
            title={title}
            className={className}
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
            title={title}
            className={className}
          >
            {icon && icon}
          </S.SurroundedIcon>
        );
    }
  },
);

export default React.memo(Button);
