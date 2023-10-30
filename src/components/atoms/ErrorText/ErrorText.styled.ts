import { styled } from 'styled-components';

import { TextItem } from 'components/atoms/TextItem';

export const ErrorText = styled(TextItem)`
  margin-left: 10px;

  font-size: 12px;
  color: ${({ theme }) => theme.globals.errorText};
  word-break: break-all;
`;
