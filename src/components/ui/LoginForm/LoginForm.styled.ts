import { css, styled } from 'styled-components';
import { shake } from 'styles/keyframes/shake';
import { BreakPoint } from 'styles/variables/breakpoints';
import { TransitionTime } from 'styles/variables/sizes';

import { TextItem } from 'components/atoms/TextItem';
import Button from 'components/ui/Button';
import LinkItem from 'components/ui/LinkItem';

export const Form = styled.form<{ $isFailed: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 380px;
  padding: 24px 16px 32px;
  border-radius: 16px;

  background: ${({ theme }) => theme.globals.fgColor};

  ${({ $isFailed }) => {
    if ($isFailed) {
      return css`
        animation: ${shake} 0.4s ease;
      `;
    }
  }};

  @media (max-width: ${BreakPoint.MobileTop}) {
    min-width: 320px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  height: 80px;
`;

export const SubmitButton = styled(Button)`
  min-height: 52px;
  margin-top: 12px;
`;

export const AlterLink = styled(LinkItem)`
  align-self: center;

  margin-top: 12px;

  color: ${({ theme }) => theme.globals.fontColor};
`;
