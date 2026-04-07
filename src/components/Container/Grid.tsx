import React, { forwardRef } from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  rows?: number | string;
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  autoColumns?: string;
  autoRows?: string;
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  children?: React.ReactNode;
}

function resolveSize(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
}

function resolveColumns(columns: number | string): string {
  if (typeof columns === 'number') return `repeat(${columns}, minmax(0, 1fr))`;
  return columns;
}

function resolveRows(rows: number | string): string {
  if (typeof rows === 'number') return `repeat(${rows}, minmax(0, 1fr))`;
  return rows;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 12,
      rows,
      gap,
      columnGap,
      rowGap,
      autoFlow,
      autoColumns,
      autoRows,
      alignItems,
      justifyItems,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const gridStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: resolveColumns(columns),
      gridTemplateRows: rows !== undefined ? resolveRows(rows) : undefined,
      gap: resolveSize(gap),
      columnGap: resolveSize(columnGap),
      rowGap: resolveSize(rowGap),
      gridAutoFlow: autoFlow,
      gridAutoColumns: autoColumns,
      gridAutoRows: autoRows,
      alignItems,
      justifyItems,
      ...style,
    };

    return (
      <div ref={ref} className={className} style={gridStyle} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
  children?: React.ReactNode;
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      colSpan,
      rowSpan,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const gridItemStyle: React.CSSProperties = {
      gridColumn: colSpan
        ? `span ${colSpan} / span ${colSpan}`
        : colStart !== undefined && colEnd !== undefined
          ? `${colStart} / ${colEnd}`
          : undefined,
      gridRow: rowSpan
        ? `span ${rowSpan} / span ${rowSpan}`
        : rowStart !== undefined && rowEnd !== undefined
          ? `${rowStart} / ${rowEnd}`
          : undefined,
      ...style,
    };

    return (
      <div ref={ref} className={className} style={gridItemStyle} {...props}>
        {children}
      </div>
    );
  }
);

GridItem.displayName = 'GridItem';
