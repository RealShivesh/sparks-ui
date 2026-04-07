import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconMap } from '../../icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconMap),
    },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'check',
    size: 24,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '16px' }}>
      {(Object.keys(iconMap) as Array<keyof typeof iconMap>).map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            minWidth: '80px',
          }}
        >
          <Icon name={name} size={24} aria-label={name} />
          <span style={{ fontSize: '11px', color: '#64748b', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="search" size={12} aria-label="search small" />
      <Icon name="search" size={16} aria-label="search medium-small" />
      <Icon name="search" size={20} aria-label="search medium" />
      <Icon name="search" size={24} aria-label="search large" />
      <Icon name="search" size={32} aria-label="search x-large" />
    </div>
  ),
};

export const Colored: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="check" size={24} color="#22c55e" aria-label="check green" />
      <Icon name="x" size={24} color="#ef4444" aria-label="x red" />
      <Icon name="info" size={24} color="#3b82f6" aria-label="info blue" />
      <Icon name="alert-circle" size={24} color="#f59e0b" aria-label="warning yellow" />
    </div>
  ),
};
