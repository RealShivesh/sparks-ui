import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider.jsx';
import { lightTheme } from './theme.js';

export function useTheme() {
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
