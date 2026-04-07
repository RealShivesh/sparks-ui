import { forwardRef } from 'react';

function resolveSize(value) {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
}

function resolveColumns(columns) {
  if (typeof columns === 'number') return `repeat(${columns}, minmax(0, 1fr))`;
  return columns;
}

function resolveRows(rows) {
  if (typeof rows === 'number') return `repeat(${rows}, minmax(0, 1fr))`;
  return rows;
}

export const Grid = forwardRef(function Grid(
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
) {
  const gridStyle = {
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
});
Grid.displayName = 'Grid';

export const GridItem = forwardRef(function GridItem(
  { colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, children, className, style, ...props },
  ref
) {
  const gridItemStyle = {
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
});
GridItem.displayName = 'GridItem';
