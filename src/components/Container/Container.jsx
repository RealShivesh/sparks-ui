import { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme.js';

const maxWidthMap = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

export const Container = forwardRef(function Container(
  { maxWidth = 'xl', centered = true, children, className, style, ...props },
  ref
) {
  const { theme } = useTheme();
  const resolvedMaxWidth = maxWidthMap[maxWidth] ?? maxWidth;

  const containerStyle = {
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
});
Container.displayName = 'Container';
