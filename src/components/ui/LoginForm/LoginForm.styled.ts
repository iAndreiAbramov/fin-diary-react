import { css, styled } from 'styled-components';

import { TextItem } from 'components/atoms/TextItem';
import Button from 'components/ui/Button';
import { shake } from 'utils/keyframes/shake';

export const Form = styled.form<{ isFailed: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 380px;
  padding: 24px 16px 32px;
  border-radius: 16px;

  background: ${({ theme }) => theme.globals.fgColor};

  ${({ isFailed }) => {
    if (isFailed) {
      return css`
        animation: ${shake} 0.4s ease;
      `;
    }
  }}
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  height: 80px;
`;

export const ErrorText = styled(TextItem)`
  margin-left: 10px;

  font-size: 12px;
  color: ${({ theme }) => theme.globals.errorText};
`;

export const SubmitButton = styled(Button)`
  min-height: 52px;
  margin-top: 12px;
`;
