import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const mediaQuery = window.matchMedia(query);
  const [isMatch, setIsMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const listener = () => setIsMatch(mediaQuery.matches);

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [mediaQuery]);

  return isMatch;
};
