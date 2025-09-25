import { useState, useEffect } from 'react';

/**
 * A custom React hook that tracks whether a media query matches.
 * @param {string} query - 
 * @returns {boolean} 
 *
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);  

  return matches;
};
