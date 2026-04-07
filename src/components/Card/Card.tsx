import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';

export type CardElevation = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation;
  isInteractive?: boolean;
  children?: React.ReactNode;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  hasBorderTop?: boolean;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, style, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
          borderBottom: `1px solid ${theme.colors.border.default}`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, style, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
          flex: 1,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, style, hasBorderTop = true, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          padding: `${theme.spacing[4]} ${theme.spacing[6]}`,
          borderTop: hasBorderTop ? `1px solid ${theme.colors.border.default}` : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = 'md',
      isInteractive = false,
      children,
      className,
      style,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = React.useState(false);

    const shadowMap: Record<CardElevation, string> = {
      none: theme.shadows.none,
      sm: theme.shadows.sm,
      md: theme.shadows.md,
      lg: theme.shadows.lg,
    };

    const cardStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.default}`,
      borderRadius: theme.borderRadius.xl,
      boxShadow: isHovered && isInteractive ? theme.shadows.lg : shadowMap[elevation],
      overflow: 'hidden',
      transition: isInteractive ? 'box-shadow 200ms ease, transform 200ms ease' : undefined,
      transform: isHovered && isInteractive ? 'translateY(-2px)' : undefined,
      cursor: isInteractive ? 'pointer' : undefined,
      fontFamily: theme.typography.fontFamilies.sans,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={className}
        style={cardStyle}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          onMouseLeave?.(e);
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
