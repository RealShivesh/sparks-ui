import { iconMap } from '../../icons/index.jsx';

export function Icon({ name, size = 20, color, 'aria-label': ariaLabel, ...props }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return (
    <IconComponent
      size={size}
      color={color ?? 'currentColor'}
      aria-label={ariaLabel}
      {...props}
    />
  );
}

Icon.displayName = 'Icon';
