import { Text } from './Text.jsx';
import { Heading } from './Heading.jsx';

export default {
  title: 'Components/Typography/Text',
  component: Text,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['body', 'caption', 'label', 'code'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
  },
};

export const Body = { args: { variant: 'body', children: 'The quick brown fox jumps over the lazy dog.' } };
export const Caption = { args: { variant: 'caption', children: 'This is a caption with secondary styling.' } };
export const Label = { args: { variant: 'label', children: 'Form Label' } };
export const Code = { args: { variant: 'code', children: 'const answer = 42;' } };

export const AllTextVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text variant="body">Body text — The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="caption">Caption text — A supporting piece of information.</Text>
      <Text variant="label">Label text</Text>
      <Text variant="code">{"const example = 'code variant';"}</Text>
    </div>
  ),
};

export const TextSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="md">Medium (md) — default</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
    </div>
  ),
};

export const TextWeights = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const HeadingDefault = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
  name: 'All Headings',
};

export const TypographyScale = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '640px' }}>
      <Heading level={1}>Display Heading</Heading>
      <Heading level={2}>Section Title</Heading>
      <Text variant="body">
        This is body text that appears under a heading. It provides context and detail for the content above.
      </Text>
      <Text variant="caption">Caption: Supporting detail or metadata shown in a smaller, secondary style.</Text>
    </div>
  ),
};
