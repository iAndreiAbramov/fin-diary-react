import { styled } from 'styled-components';
import { BreakPoint } from 'styles/variables/breakpoints';

import Button from 'components/ui/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  height: 100%;

  color: ${({ theme }) => theme.globals.fontColor.inverse};
`;

export const MenuButton = styled(Button)`
  width: 40px;
  height: 40px;

  & svg path {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.globals.fontColor.inverse};
    stroke: ${({ theme }) => theme.globals.fontColor.inverse};
  }

  @media (min-width: ${BreakPoint.LaptopLow}) {
    display: none;
  }
`;
