import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  'aria-label'?: string;
}

function createIcon(
  displayName: string,
  path: React.ReactNode
): React.FC<IconProps> {
  const Icon: React.FC<IconProps> = ({
    size = 20,
    color = 'currentColor',
    'aria-label': ariaLabel,
    role,
    ...props
  }) => {
    const accessibilityProps = ariaLabel
      ? { role: role ?? 'img', 'aria-label': ariaLabel }
      : { role: role ?? 'presentation', 'aria-hidden': true as const };

    return React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        ...accessibilityProps,
        ...props,
      },
      path
    );
  };

  Icon.displayName = displayName;
  return Icon;
}

export const CheckIcon = createIcon(
  'CheckIcon',
  React.createElement('polyline', { points: '20 6 9 17 4 12' })
);

export const XIcon = createIcon(
  'XIcon',
  React.createElement(React.Fragment, null,
    React.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  )
);

export const ChevronDownIcon = createIcon(
  'ChevronDownIcon',
  React.createElement('polyline', { points: '6 9 12 15 18 9' })
);

export const ChevronUpIcon = createIcon(
  'ChevronUpIcon',
  React.createElement('polyline', { points: '18 15 12 9 6 15' })
);

export const ChevronLeftIcon = createIcon(
  'ChevronLeftIcon',
  React.createElement('polyline', { points: '15 18 9 12 15 6' })
);

export const ChevronRightIcon = createIcon(
  'ChevronRightIcon',
  React.createElement('polyline', { points: '9 18 15 12 9 6' })
);

export const SearchIcon = createIcon(
  'SearchIcon',
  React.createElement(React.Fragment, null,
    React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
    React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
  )
);

export const UserIcon = createIcon(
  'UserIcon',
  React.createElement(React.Fragment, null,
    React.createElement('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
    React.createElement('circle', { cx: '12', cy: '7', r: '4' })
  )
);

export const HomeIcon = createIcon(
  'HomeIcon',
  React.createElement(React.Fragment, null,
    React.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
    React.createElement('polyline', { points: '9 22 9 12 15 12 15 22' })
  )
);

export const MenuIcon = createIcon(
  'MenuIcon',
  React.createElement(React.Fragment, null,
    React.createElement('line', { x1: '3', y1: '12', x2: '21', y2: '12' }),
    React.createElement('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
    React.createElement('line', { x1: '3', y1: '18', x2: '21', y2: '18' })
  )
);

export const PlusIcon = createIcon(
  'PlusIcon',
  React.createElement(React.Fragment, null,
    React.createElement('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
    React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
  )
);

export const MinusIcon = createIcon(
  'MinusIcon',
  React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' })
);

export const AlertCircleIcon = createIcon(
  'AlertCircleIcon',
  React.createElement(React.Fragment, null,
    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
    React.createElement('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' })
  )
);

export const InfoIcon = createIcon(
  'InfoIcon',
  React.createElement(React.Fragment, null,
    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    React.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
    React.createElement('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' })
  )
);

export const ExternalLinkIcon = createIcon(
  'ExternalLinkIcon',
  React.createElement(React.Fragment, null,
    React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
    React.createElement('polyline', { points: '15 3 21 3 21 9' }),
    React.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
  )
);

export const EyeIcon = createIcon(
  'EyeIcon',
  React.createElement(React.Fragment, null,
    React.createElement('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '3' })
  )
);

export const EyeOffIcon = createIcon(
  'EyeOffIcon',
  React.createElement(React.Fragment, null,
    React.createElement('path', { d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' }),
    React.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
  )
);

export const iconMap = {
  check: CheckIcon,
  x: XIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  search: SearchIcon,
  user: UserIcon,
  home: HomeIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  'alert-circle': AlertCircleIcon,
  info: InfoIcon,
  'external-link': ExternalLinkIcon,
  eye: EyeIcon,
  'eye-off': EyeOffIcon,
} as const;

export type IconName = keyof typeof iconMap;
