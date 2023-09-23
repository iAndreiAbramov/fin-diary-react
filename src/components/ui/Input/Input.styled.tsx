import { FontFamily } from 'constants/style-variables/fonts';
import { TransitionTime } from 'constants/style-variables/sizes';
import { styled } from 'styled-components';

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

export const Input = styled.input`
  padding: 12px 24px;
  width: 100%;
  height: 100%;

  font-family: ${FontFamily.Ubuntu};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.components.input.fontColor.default};
  vertical-align: center;
  background-color: ${({ theme }) => theme.components.input.bgColor.default};
  border: 1px solid ${({ theme }) => theme.components.input.borderColor.default};
  border-radius: 16px;
  outline: none;

  transition: all ${TransitionTime.Active};

  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.components.input.bgColor.focusedActive};
    border: 1px solid ${({ theme }) => theme.components.input.borderColor.focusedActive};

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
