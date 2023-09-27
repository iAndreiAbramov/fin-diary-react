import { FontFamily } from 'constants/style-variables/fonts';
import { TransitionTime } from 'constants/style-variables/sizes';
import { styled } from 'styled-components';

export const Input = styled.input<{ $hasIcon: boolean; $isValid: boolean }>`
  padding: ${({ $hasIcon }) => ($hasIcon ? `12px 46px 12px 24px` : '12px 24px')};
  width: 100%;
  height: 46px;

  background-color: ${({ theme }) => theme.components.input.bgColor.default};
  border: 1px solid
    ${({ theme, $isValid }) =>
      $isValid
        ? theme.components.input.borderColor.default
        : theme.components.input.borderColor.invalid};
  border-radius: 16px;
  outline: none;

  font-family: ${FontFamily.Ubuntu};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.components.input.fontColor.default};
  vertical-align: center;

  transition: all ${TransitionTime.Active};

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.components.input.bgColor.focusedActive};
    border: 1px solid
      ${({ theme, $isValid }) =>
        $isValid
          ? theme.components.input.borderColor.focusedActive
          : theme.components.input.borderColor.invalid};

    &::placeholder {
      color: transparent;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.components.input.bgColor.disabled};
    border: 1px solid ${({ theme }) => theme.components.input.borderColor.disabled};

    color: ${({ theme }) => theme.components.input.fontColor.disabled};
  }
`;
