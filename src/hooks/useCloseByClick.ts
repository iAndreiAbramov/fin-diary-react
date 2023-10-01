import { useEffect } from 'react';

export const useCloseByClick = ({ isShown, cb }: { isShown: boolean; cb: () => void }): void => {
  useEffect(() => {
    const closeByClick = () => {
      cb();
    };

    if (isShown) {
      setTimeout(() => document.addEventListener('click', closeByClick), 0);
    }

    return () => {
      document.removeEventListener('click', closeByClick);
    };
  }, [cb, isShown]);
};
