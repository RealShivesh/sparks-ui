import { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeProvider';
import { lightTheme, ThemeConfig } from './theme';

/**
 * Hook to access the current theme. Falls back to the light theme if used
 * outside of a ThemeProvider, making components safe to render in isolation.
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: lightTheme,
      mode: 'light',
      setMode: () => undefined,
      toggleMode: () => undefined,
    };
  }
  return context;
}

export type { ThemeConfig };
