import { css, styled } from 'styled-components';
import { BreakPoint } from 'styles/variables/breakpoints';
import { HeaderHeight, LayoutPadding, ZIndex } from 'styles/variables/sizes';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndex.Header};

  height: ${HeaderHeight.Desktop};
  padding: 16px ${LayoutPadding.Desktop};

  background-color: ${({ theme }) => theme.globals.bgColor.header};
  border-bottom: ${({ theme }) => `1px solid ${theme.globals.fontColor.default}`};
`;

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto 1fr;

  min-height: calc(100vh + 1px);
  padding-top: ${HeaderHeight.Desktop};
`;

export const MenuWrapper = styled.nav<{ $isActive: boolean }>`
  grid-row: 1 / -1;
  grid-column: 1;

  padding: 10px 16px 24px 12px;

  background-color: ${({ theme }) => theme.globals.bgColor.header};
  border-right: ${({ theme }) => `1px solid ${theme.globals.fontColor.default}`};

  @media (max-width: ${BreakPoint.TabletTop}) {
    padding: 32px 16px;
    ${({ $isActive }) => {
      if ($isActive) {
        return css`
          position: fixed;
          top: ${HeaderHeight.Tablet};
          left: 0;
          right: 0;
          bottom: 0;
        `;
      }
      return css`
        display: none;
      `;
    }};
  }
`;

export const ContentWrapper = styled.main`
  grid-column: 2;
  grid-row: 1;

  padding: 24px ${LayoutPadding.Desktop} 24px;
`;

export const FooterWrapper = styled.footer`
  grid-column: 1 / -1;
  grid-row: 2;

  padding: 24px ${LayoutPadding.Desktop} 24px;

  background-color: ${({ theme }) => theme.globals.bgColor.header};
  border-top: ${({ theme }) => `1px solid ${theme.globals.fontColor.default}`};
`;
