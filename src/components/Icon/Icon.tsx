import React from 'react';
import { iconMap, IconName, IconProps } from '../../icons';

export interface IconComponentProps extends Omit<IconProps, 'name'> {
  name: IconName;
  size?: number;
  color?: string;
  'aria-label'?: string;
}

export const Icon: React.FC<IconComponentProps> = ({ name, size = 20, color, 'aria-label': ariaLabel, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color ?? 'currentColor'}
      aria-label={ariaLabel}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
