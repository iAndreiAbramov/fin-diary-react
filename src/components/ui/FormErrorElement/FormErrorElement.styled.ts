import { css, styled } from 'styled-components';
import { TransitionTime } from 'styles/variables/sizes';

import { TextItem } from 'components/atoms/TextItem';

export const ErrorContainer = styled.div<{ $hasError: boolean }>`
  display: grid;
  justify-content: center;

  margin-top: 12px;

  transition: all ${TransitionTime.Hover};

  ${({ $hasError }) =>
    $hasError
      ? css`
          grid-template-rows: 1fr;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          grid-template-rows: 0fr;
          opacity: 0;
          transform: translateY(-50%);
        `};
`;

export const ErrorText = styled(TextItem)`
  margin-left: 10px;

  font-size: 12px;
  color: ${({ theme }) => theme.globals.errorText};
  word-break: break-all;
`;
