import { styled } from 'styled-components';

import { TextItem } from 'components/atoms/TextItem';
import Button from 'components/ui/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 380px;
  padding: 24px 16px 32px;
  border-radius: 16px;

  background: ${({ theme }) => theme.globals.fgColor};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelText = styled(TextItem)`
  margin-left: 16px;
`;

export const SubmitButton = styled(Button)`
  min-height: 52px;
  margin-top: 12px;
`;
