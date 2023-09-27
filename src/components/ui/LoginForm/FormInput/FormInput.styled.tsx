import { FontFamily } from 'constants/style-variables/fonts';
import { styled } from 'styled-components';

import { Input } from 'components/atoms/Input';
import { TextItem } from 'components/atoms/TextItem';

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;

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

export const FormInput = styled(Input)``;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: -24px;
  right: 0;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  cursor: pointer;

  & svg {
    fill: ${({ theme }) => theme.components.input.borderColor.default};
  }
`;

export const LabelText = styled(TextItem)`
  margin-left: 16px;
`;
