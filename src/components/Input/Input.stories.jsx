import { Input } from './Input.jsx';
import { SearchIcon, UserIcon, EyeIcon } from '../../icons/index.jsx';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export const Default = { args: { placeholder: 'Enter text...' } };
export const WithLabel = { args: { label: 'Email Address', type: 'email', placeholder: 'you@example.com' } };
export const WithHelperText = { args: { label: 'Username', placeholder: 'Enter your username', helperText: 'Must be at least 3 characters.' } };
export const WithError = { args: { label: 'Email', type: 'email', placeholder: 'you@example.com', defaultValue: 'not-an-email', errorText: 'Please enter a valid email address.' } };
export const Disabled = { args: { label: 'Disabled Input', placeholder: 'Cannot type here', isDisabled: true } };
export const Required = { args: { label: 'Required Field', placeholder: 'This field is required', isRequired: true } };
export const ReadOnly = { args: { label: 'Read Only', defaultValue: 'This value cannot be changed', isReadOnly: true } };
export const WithPrefix = { args: { label: 'Search', type: 'search', placeholder: 'Search...', prefix: <SearchIcon size={16} /> } };
export const WithSuffix = { args: { label: 'Username', placeholder: 'Enter username', suffix: <UserIcon size={16} /> } };
export const Password = { args: { label: 'Password', type: 'password', placeholder: 'Enter password', suffix: <EyeIcon size={16} /> } };

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '320px' }}>
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const FullWidth = {
  args: { label: 'Full Width Input', placeholder: 'This input takes full width', fullWidth: true },
  parameters: { layout: 'padded' },
};
