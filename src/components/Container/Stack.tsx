import React, { forwardRef } from 'react';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: number | string;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const alignMap: Record<StackAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap: Record<StackJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
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
  ) => {
    const resolvedGap = typeof gap === 'number' ? `${gap}px` : gap;

    const stackStyle: React.CSSProperties = {
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
  }
);

Stack.displayName = 'Stack';
