import { forwardRef } from 'react';

const alignMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
};

export const Stack = forwardRef(function Stack(
  {
    direction = 'column',
    gap = '1rem',
    align = 'stretch',
    justify = 'start',
    wrap = false,
    fullWidth = false,
    fullHeight = false,
    children,
    className,
    style,
    ...props
  },
  ref
) {
  const resolvedGap = typeof gap === 'number' ? `${gap}px` : gap;

  const stackStyle = {
    display: 'flex',
    flexDirection: direction,
    gap: resolvedGap,
    alignItems: alignMap[align],
    justifyContent: justifyMap[justify],
    flexWrap: wrap ? 'wrap' : 'nowrap',
    width: fullWidth ? '100%' : undefined,
    height: fullHeight ? '100%' : undefined,
    ...style,
  };

  return (
    <div ref={ref} className={className} style={stackStyle} {...props}>
      {children}
    </div>
  );
});
Stack.displayName = 'Stack';
