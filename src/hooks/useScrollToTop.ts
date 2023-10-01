import { useEffect } from 'react';

export const useScrollToTop = (pathname: string): void => {
  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};
