import {
  lightPalette,
  darkPalette,
  ColorPalette,
} from '../tokens/colors';
import { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from '../tokens/typography';
import { spacing, borderRadius, shadows } from '../tokens/spacing';

export interface ThemeConfig {
  mode: 'light' | 'dark';
  colors: ColorPalette;
  typography: {
    fontFamilies: typeof fontFamilies;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
    letterSpacings: typeof letterSpacings;
  };
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
}

export const lightTheme: ThemeConfig = {
  mode: 'light',
  colors: lightPalette,
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
  },
  spacing,
  borderRadius,
  shadows,
};

export const darkTheme: ThemeConfig = {
  mode: 'dark',
  colors: darkPalette,
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
  },
  spacing,
  borderRadius,
  shadows,
};

export type ThemeMode = 'light' | 'dark';
