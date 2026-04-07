import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme.js';

const defaultTag = { body: 'p', caption: 'span', label: 'label', code: 'code' };
const defaultSize = { body: 'md', caption: 'xs', label: 'sm', code: 'sm' };

export const Text = forwardRef(function Text(
  { variant = 'body', size, weight, color, truncate = false, as, children, className, style, ...props },
  ref
) {
  const { theme } = useTheme();
  const tag = as ?? defaultTag[variant];
  const resolvedSize = size ?? defaultSize[variant];

  const variantStyles = {
    body: {
      lineHeight: theme.typography.lineHeights.normal,
      color: color ?? theme.colors.foreground.primary,
    },
    caption: {
      lineHeight: theme.typography.lineHeights.normal,
      color: color ?? theme.colors.foreground.secondary,
    },
    label: {
      lineHeight: theme.typography.lineHeights.tight,
      fontWeight: theme.typography.fontWeights.medium,
      color: color ?? theme.colors.foreground.primary,
    },
    code: {
      fontFamily: theme.typography.fontFamilies.mono,
      backgroundColor: theme.colors.background.tertiary,
      color: color ?? theme.colors.foreground.primary,
      padding: `${theme.spacing[0.5]} ${theme.spacing[1]}`,
      borderRadius: theme.borderRadius.sm,
      lineHeight: theme.typography.lineHeights.normal,
    },
  };

  const weightMap = {
    normal: theme.typography.fontWeights.normal,
    medium: theme.typography.fontWeights.medium,
    semibold: theme.typography.fontWeights.semibold,
    bold: theme.typography.fontWeights.bold,
  };

  const computedStyle = {
    margin: 0,
    padding: 0,
    fontFamily: variant === 'code' ? undefined : theme.typography.fontFamilies.sans,
    fontSize: theme.typography.fontSizes[resolvedSize],
    fontWeight: weight ? weightMap[weight] : undefined,
    overflow: truncate ? 'hidden' : undefined,
    textOverflow: truncate ? 'ellipsis' : undefined,
    whiteSpace: truncate ? 'nowrap' : undefined,
    ...variantStyles[variant],
    ...style,
  };

  return React.createElement(tag, { ref, className, style: computedStyle, ...props }, children);
});

Text.displayName = 'Text';
