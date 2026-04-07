import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme.js';

export const CardHeader = forwardRef(function CardHeader({ children, className, style, ...props }, ref) {
  const { theme } = useTheme();
  return (
    <div
      ref={ref}
      className={className}
      style={{ padding: `${theme.spacing[4]} ${theme.spacing[6]}`, borderBottom: `1px solid ${theme.colors.border.default}`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef(function CardBody({ children, className, style, ...props }, ref) {
  const { theme } = useTheme();
  return (
    <div
      ref={ref}
      className={className}
      style={{ padding: `${theme.spacing[4]} ${theme.spacing[6]}`, flex: 1, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
CardBody.displayName = 'CardBody';

export const CardFooter = forwardRef(function CardFooter(
  { children, className, style, hasBorderTop = true, ...props },
  ref
) {
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
});
CardFooter.displayName = 'CardFooter';

export const Card = forwardRef(function Card(
  { elevation = 'md', isInteractive = false, children, className, style, onMouseEnter, onMouseLeave, ...props },
  ref
) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  const shadowMap = {
    none: theme.shadows.none,
    sm: theme.shadows.sm,
    md: theme.shadows.md,
    lg: theme.shadows.lg,
  };

  const cardStyle = {
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
      onMouseEnter={(e) => { setIsHovered(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setIsHovered(false); onMouseLeave?.(e); }}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';
