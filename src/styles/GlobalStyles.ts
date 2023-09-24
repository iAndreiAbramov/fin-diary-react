import { BreakPoint } from 'constants/style-variables/breakpoints';
import { FontFamily } from 'constants/style-variables/fonts';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    position: relative;

    margin: 0;
    max-width: 100%;
    min-height: calc(100vh + 1px);

    font-family: ${FontFamily.Ubuntu};
    color: ${({ theme }) => theme.globals.fontColor};

    background-color: ${({ theme }) => theme.globals.bgColor};
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
