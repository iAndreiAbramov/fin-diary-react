import { createGlobalStyle } from 'styled-components';
import { BreakPoint } from 'styles/variables/breakpoints';
import { FontFamily } from 'styles/variables/fonts';

export const GlobalStyles = createGlobalStyle`
  body {
    position: relative;

    margin: 0;
    max-width: 100%;
    min-height: calc(100vh + 1px);

    font-family: ${FontFamily.Ubuntu};
    color: ${({ theme }) => theme.globals.fontColor.default};

    background-color: ${({ theme }) => theme.globals.bgColor.default};
  }

  body * {
    box-sizing: border-box;
  }

  #root {
    max-width: ${BreakPoint.DesktopTop};

    @media (min-width: ${BreakPoint.DesktopTop}) {
      margin: 0 auto;
    };
  }
`;
