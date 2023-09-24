import { FontFamily } from 'constants/style-variables/fonts';
import { TransitionTime } from 'constants/style-variables/sizes';
import { styled } from 'styled-components';

const INPUT_ICON_WIDTH = '48px';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  font-family: ${FontFamily.Ubuntu};

  &::placeholder {
    font-family: ${FontFamily.Ubuntu};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.components.input.fontColor.placeholder};
    opacity: 0.5;
  }
`;

export const Input = styled.input<{ hasIcon: boolean; isValid: boolean }>`
  padding: ${({ hasIcon }) => (hasIcon ? `12px ${INPUT_ICON_WIDTH} 12px 24px` : '12px 24px')};
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.components.input.bgColor.default};
  border: 1px solid
    ${({ theme, isValid }) =>
      isValid
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
      ${({ theme, isValid }) =>
        isValid
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

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${INPUT_ICON_WIDTH};
  height: 100%;

  cursor: pointer;

  & svg {
    fill: ${({ theme }) => theme.components.input.borderColor.default};
  }
`;
