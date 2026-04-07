import { lightPalette, darkPalette } from '../tokens/colors.js';
import { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings } from '../tokens/typography.js';
import { spacing, borderRadius, shadows } from '../tokens/spacing.js';

export const lightTheme = {
  mode: 'light',
  colors: lightPalette,
  typography: { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings },
  spacing,
  borderRadius,
  shadows,
};

export const darkTheme = {
  mode: 'dark',
  colors: darkPalette,
  typography: { fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings },
  spacing,
  borderRadius,
  shadows,
};
