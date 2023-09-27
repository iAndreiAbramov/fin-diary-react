import React, { ReactElement, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles';

export const wrapWithDarkTheme = (component: React.ReactNode): ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={lightTheme}>
      <>{component}</>
    </ThemeProvider>
  </Suspense>
);
