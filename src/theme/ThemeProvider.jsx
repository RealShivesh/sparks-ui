import React, { createContext, useContext, useState, useCallback } from 'react';
import { lightTheme, darkTheme } from './theme.js';

export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children, defaultMode = 'light', theme: themeOverride }) {
  const [mode, setModeState] = useState(defaultMode);

  const setMode = useCallback((newMode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const baseTheme = mode === 'light' ? lightTheme : darkTheme;

  const theme = themeOverride
    ? {
        ...baseTheme,
        ...themeOverride,
        colors: { ...baseTheme.colors, ...themeOverride.colors },
        typography: { ...baseTheme.typography, ...themeOverride.typography },
      }
    : baseTheme;

  const value = { theme, mode, setMode, toggleMode };

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
