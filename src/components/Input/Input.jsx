import { forwardRef, useState, useId } from 'react';
import { useTheme } from '../../theme/useTheme.js';

export const Input = forwardRef(function Input(
  {
    label,
    helperText,
    errorText,
    size = 'md',
    isDisabled = false,
    isRequired = false,
    isReadOnly = false,
    prefix,
    suffix,
    fullWidth = false,
    className,
    style,
    onFocus,
    onBlur,
    id: providedId,
    type = 'text',
    ...props
  },
  ref
) {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const hasError = Boolean(errorText);
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  const sizeConfig = {
    sm: { height: '2rem', fontSize: theme.typography.fontSizes.sm, paddingX: theme.spacing[3] },
    md: { height: '2.5rem', fontSize: theme.typography.fontSizes.md, paddingX: theme.spacing[4] },
    lg: { height: '3rem', fontSize: theme.typography.fontSizes.lg, paddingX: theme.spacing[4] },
  };

  const config = sizeConfig[size];

  const getBorderColor = () => {
    if (hasError) return theme.colors.danger.default;
    if (isFocused) return theme.colors.border.focus;
    return theme.colors.border.default;
  };

  const wrapperStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: theme.spacing[1],
    width: fullWidth ? '100%' : undefined,
    fontFamily: theme.typography.fontFamilies.sans,
  };

  const labelStyle = {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: hasError ? theme.colors.danger.text : theme.colors.foreground.primary,
    lineHeight: theme.typography.lineHeights.tight,
  };

  const inputWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    height: config.height,
    borderRadius: theme.borderRadius.md,
    border: `1px solid ${getBorderColor()}`,
    backgroundColor: isDisabled ? theme.colors.background.secondary : theme.colors.background.primary,
    boxShadow: isFocused
      ? `0 0 0 3px ${hasError ? theme.colors.danger.default : theme.colors.border.focus}26`
      : theme.shadows.sm,
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    overflow: 'hidden',
    cursor: isDisabled ? 'not-allowed' : undefined,
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box',
  };

  const adornmentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: prefix ? config.paddingX : undefined,
    paddingRight: suffix ? config.paddingX : undefined,
    color: theme.colors.foreground.tertiary,
    flexShrink: 0,
  };

  const inputStyle = {
    flex: 1,
    height: '100%',
    paddingLeft: prefix ? theme.spacing[2] : config.paddingX,
    paddingRight: suffix ? theme.spacing[2] : config.paddingX,
    fontSize: config.fontSize,
    fontFamily: theme.typography.fontFamilies.sans,
    color: isDisabled ? theme.colors.foreground.disabled : theme.colors.foreground.primary,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: isDisabled ? 'not-allowed' : isReadOnly ? 'default' : 'text',
    lineHeight: theme.typography.lineHeights.normal,
    minWidth: 0,
  };

  const helperStyle = {
    fontSize: theme.typography.fontSizes.xs,
    color: hasError ? theme.colors.danger.text : theme.colors.foreground.secondary,
    lineHeight: theme.typography.lineHeights.normal,
  };

  return (
    <div style={wrapperStyle} className={className}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
          {isRequired && (
            <span aria-hidden="true" style={{ color: theme.colors.danger.default, marginLeft: '2px' }}>
              *
            </span>
          )}
        </label>
      )}
      <div style={inputWrapperStyle}>
        {prefix && <span style={adornmentStyle}>{prefix}</span>}
        <input
          ref={ref}
          id={id}
          type={type}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
          aria-required={isRequired}
          style={{ ...inputStyle, ...style }}
          onFocus={(e) => { setIsFocused(true); onFocus?.(e); }}
          onBlur={(e) => { setIsFocused(false); onBlur?.(e); }}
          {...props}
        />
        {suffix && (
          <span style={{ ...adornmentStyle, paddingLeft: theme.spacing[2], paddingRight: config.paddingX }}>
            {suffix}
          </span>
        )}
      </div>
      {(helperText || errorText) && (
        <span id={hasError ? errorId : helperId} role={hasError ? 'alert' : undefined} style={helperStyle}>
          {hasError ? errorText : helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
