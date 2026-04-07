import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  color?: string;
  truncate?: boolean;
  children?: React.ReactNode;
}

const headingSizeMap: Record<HeadingLevel, string> = {
  1: '3xl',
  2: '2xl',
  3: 'xl',
  4: 'lg',
  5: 'md',
  6: 'sm',
};

const headingWeightMap: Record<HeadingLevel, string> = {
  1: 'bold',
  2: 'bold',
  3: 'semibold',
  4: 'semibold',
  5: 'medium',
  6: 'medium',
};

const headingLineHeightMap: Record<HeadingLevel, string> = {
  1: 'tight',
  2: 'tight',
  3: 'snug',
  4: 'snug',
  5: 'normal',
  6: 'normal',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, color, truncate = false, children, className, style, ...props }, ref) => {
    const { theme } = useTheme();
    const tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    const sizeKey = headingSizeMap[level] as keyof typeof theme.typography.fontSizes;
    const weightKey = headingWeightMap[level] as keyof typeof theme.typography.fontWeights;
    const lineHeightKey = headingLineHeightMap[level] as keyof typeof theme.typography.lineHeights;

    const computedStyle: React.CSSProperties = {
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

    return React.createElement(
      tag,
      {
        ref,
        className,
        style: computedStyle,
        ...props,
      },
      children
    );
  }
);

Heading.displayName = 'Heading';
