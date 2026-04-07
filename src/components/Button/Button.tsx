import React, { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      className,
      style,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const disabled = isDisabled || isLoading;

    const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
      sm: {
        height: '2rem',
        paddingLeft: theme.spacing[3],
        paddingRight: theme.spacing[3],
        fontSize: theme.typography.fontSizes.sm,
        gap: theme.spacing[1],
      },
      md: {
        height: '2.5rem',
        paddingLeft: theme.spacing[4],
        paddingRight: theme.spacing[4],
        fontSize: theme.typography.fontSizes.md,
        gap: theme.spacing[2],
      },
      lg: {
        height: '3rem',
        paddingLeft: theme.spacing[6],
        paddingRight: theme.spacing[6],
        fontSize: theme.typography.fontSizes.lg,
        gap: theme.spacing[2],
      },
    };

    const getVariantStyles = (): React.CSSProperties => {
      const { colors } = theme;
      const hovered = isHovered && !disabled;

      switch (variant) {
        case 'primary':
          return {
            backgroundColor: hovered ? colors.brand.hover : colors.brand.default,
            color: colors.foreground.inverse,
            border: '1px solid transparent',
          };
        case 'secondary':
          return {
            backgroundColor: hovered ? colors.background.tertiary : colors.background.secondary,
            color: colors.foreground.primary,
            border: `1px solid ${colors.border.default}`,
          };
        case 'ghost':
          return {
            backgroundColor: hovered ? colors.background.tertiary : 'transparent',
            color: colors.foreground.primary,
            border: '1px solid transparent',
          };
        case 'danger':
          return {
            backgroundColor: hovered ? colors.danger.text : colors.danger.default,
            color: colors.foreground.inverse,
            border: '1px solid transparent',
          };
        case 'outline':
          return {
            backgroundColor: hovered ? colors.brand.subtle : 'transparent',
            color: colors.brand.default,
            border: `1px solid ${colors.brand.default}`,
          };
        default:
          return {};
      }
    };

    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.typography.fontFamilies.sans,
      fontWeight: theme.typography.fontWeights.medium,
      borderRadius: theme.borderRadius.md,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : undefined,
      transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease, opacity 150ms ease',
      outline: isFocused ? `2px solid ${theme.colors.border.focus}` : 'none',
      outlineOffset: '2px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      boxSizing: 'border-box',
      lineHeight: theme.typography.lineHeights.none,
      ...sizeStyles[size],
      ...getVariantStyles(),
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        aria-busy={isLoading}
        className={className}
        style={baseStyle}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          onMouseLeave?.(e);
        }}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      >
        {isLoading && (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{
              animation: 'spin 1s linear infinite',
              flexShrink: 0,
            }}
          >
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {leftIcon}
          </span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && (
          <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
