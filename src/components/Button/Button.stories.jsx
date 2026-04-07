import { Button } from './Button.jsx';
import { CheckIcon, PlusIcon, ChevronRightIcon } from '../../icons/index.jsx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export const Primary = { args: { variant: 'primary', children: 'Primary Button' } };
export const Secondary = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost = { args: { variant: 'ghost', children: 'Ghost Button' } };
export const Danger = { args: { variant: 'danger', children: 'Danger Button' } };
export const Outline = { args: { variant: 'outline', children: 'Outline Button' } };
export const Small = { args: { size: 'sm', children: 'Small Button' } };
export const Large = { args: { size: 'lg', children: 'Large Button' } };
export const Loading = { args: { isLoading: true, children: 'Loading...' } };
export const Disabled = { args: { isDisabled: true, children: 'Disabled Button' } };
export const WithLeftIcon = { args: { leftIcon: <PlusIcon size={16} />, children: 'Add Item' } };
export const WithRightIcon = { args: { rightIcon: <ChevronRightIcon size={16} />, children: 'Continue' } };
export const WithBothIcons = {
  args: { leftIcon: <CheckIcon size={16} />, rightIcon: <ChevronRightIcon size={16} />, children: 'Confirm' },
};
export const FullWidth = {
  args: { fullWidth: true, children: 'Full Width Button' },
  parameters: { layout: 'padded' },
};
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
