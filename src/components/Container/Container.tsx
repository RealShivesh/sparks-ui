import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string;
  centered?: boolean;
  children?: React.ReactNode;
}

const maxWidthMap: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { maxWidth = 'xl', centered = true, children, className, style, ...props },
    ref
  ) => {
    const { theme } = useTheme();
    const resolvedMaxWidth = maxWidthMap[maxWidth] ?? maxWidth;

    const containerStyle: React.CSSProperties = {
      width: '100%',
      maxWidth: resolvedMaxWidth,
      marginLeft: centered ? 'auto' : undefined,
      marginRight: centered ? 'auto' : undefined,
      paddingLeft: theme.spacing[4],
      paddingRight: theme.spacing[4],
      boxSizing: 'border-box',
      ...style,
    };

    return (
      <div ref={ref} className={className} style={containerStyle} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
