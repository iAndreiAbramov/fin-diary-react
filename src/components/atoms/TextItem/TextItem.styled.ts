import { styled } from 'styled-components';
import { FontFamily, FontWeight } from 'styles/variables/fonts';

export const TextItem = styled.span`
  font-family: ${FontFamily.Ubuntu};
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  color: ${({ theme }) => theme.globals.fontColor};
`;
