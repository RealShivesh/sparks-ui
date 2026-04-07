import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeConfig, ThemeMode, lightTheme, darkTheme } from './theme';

export interface ThemeContextValue {
  theme: ThemeConfig;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  theme?: Partial<ThemeConfig>;
}

export function ThemeProvider({
  children,
  defaultMode = 'light',
  theme: themeOverride,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const baseTheme = mode === 'light' ? lightTheme : darkTheme;

  const theme: ThemeConfig = themeOverride
    ? {
        ...baseTheme,
        ...themeOverride,
        colors: { ...baseTheme.colors, ...themeOverride.colors },
        typography: { ...baseTheme.typography, ...themeOverride.typography },
      }
    : baseTheme;

  const value: ThemeContextValue = {
    theme,
    mode,
    setMode,
    toggleMode,
  };

  return React.createElement(ThemeContext.Provider, { value }, children);
}

export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
