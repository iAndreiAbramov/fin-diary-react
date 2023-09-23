import React, { ReactElement, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'styles';


export const wrapWithDarkTheme = (component: React.ReactNode): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={darkTheme}>
      <>{component}</>
    </ThemeProvider>
  </Suspense>
);
