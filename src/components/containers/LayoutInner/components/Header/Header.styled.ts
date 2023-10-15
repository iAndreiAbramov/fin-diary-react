import { styled } from 'styled-components';
import { BreakPoint } from 'styles/variables/breakpoints';

import Button from 'components/ui/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  height: 100%;
`;

export const MenuButton = styled(Button)`
  width: 40px;
  height: 40px;

  & svg path {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${BreakPoint.LaptopLow}) {
    display: none;
  }
`;

export const LogoutButton = styled(Button)`
  margin-left: auto;
`;
