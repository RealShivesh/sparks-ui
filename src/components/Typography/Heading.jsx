import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme.js';

const headingSizeMap = { 1: '3xl', 2: '2xl', 3: 'xl', 4: 'lg', 5: 'md', 6: 'sm' };
const headingWeightMap = { 1: 'bold', 2: 'bold', 3: 'semibold', 4: 'semibold', 5: 'medium', 6: 'medium' };
const headingLineHeightMap = { 1: 'tight', 2: 'tight', 3: 'snug', 4: 'snug', 5: 'normal', 6: 'normal' };

export const Heading = forwardRef(function Heading(
  { level = 2, color, truncate = false, children, className, style, ...props },
  ref
) {
  const { theme } = useTheme();
  const tag = `h${level}`;
  const sizeKey = headingSizeMap[level];
  const weightKey = headingWeightMap[level];
  const lineHeightKey = headingLineHeightMap[level];

  const computedStyle = {
    margin: 0,
    padding: 0,
    fontFamily: theme.typography.fontFamilies.sans,
    fontSize: theme.typography.fontSizes[sizeKey],
    fontWeight: theme.typography.fontWeights[weightKey],
    lineHeight: theme.typography.lineHeights[lineHeightKey],
    color: color ?? theme.colors.foreground.primary,
    letterSpacing: level <= 2 ? theme.typography.letterSpacings.tight : undefined,
    overflow: truncate ? 'hidden' : undefined,
    textOverflow: truncate ? 'ellipsis' : undefined,
    whiteSpace: truncate ? 'nowrap' : undefined,
    ...style,
  };

  return React.createElement(tag, { ref, className, style: computedStyle, ...props }, children);
});

Heading.displayName = 'Heading';
