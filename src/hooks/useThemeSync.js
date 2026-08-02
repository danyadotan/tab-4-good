import { useEffect } from 'react';

/**
 * Syncs the `.dark` class on <html> with the system color scheme.
 * Additive: only toggles the class; the token system handles the rest.
 */
export default function useThemeSync() {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = (query) => {
      document.documentElement.classList.toggle('dark', query.matches);
    };
    apply(mql);
    const handler = (query) => apply(query);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
}