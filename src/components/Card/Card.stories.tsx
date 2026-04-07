import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button/Button';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    elevation: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    isInteractive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardBody>
        <Text>This is a basic card with body content.</Text>
      </CardBody>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardHeader>
        <Heading level={4}>Card Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>Card content goes here. You can place any content inside.</Text>
      </CardBody>
    </Card>
  ),
};

export const FullCard: Story = {
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardHeader>
        <Heading level={4}>Card Title</Heading>
        <Text variant="caption" style={{ marginTop: '4px' }}>
          Supporting subtitle text
        </Text>
      </CardHeader>
      <CardBody>
        <Text>
          This card has a header, body, and footer. Use it to group related information
          and actions together.
        </Text>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm">
            Confirm
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card isInteractive style={{ width: '280px' }}>
      <CardBody>
        <Heading level={5} style={{ marginBottom: '8px' }}>
          Interactive Card
        </Heading>
        <Text variant="caption">Hover over this card to see the lift effect.</Text>
      </CardBody>
    </Card>
  ),
};

export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', flexWrap: 'wrap' }}>
      {(['none', 'sm', 'md', 'lg'] as const).map((elevation) => (
        <Card key={elevation} elevation={elevation} style={{ width: '160px' }}>
          <CardBody>
            <Text variant="label">elevation: {elevation}</Text>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const ContentCard: Story = {
  render: () => (
    <Card style={{ width: '360px' }}>
      <div
        style={{
          height: '160px',
          backgroundColor: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text color="#ffffff" weight="bold" size="xl">
          Image Placeholder
        </Text>
      </div>
      <CardBody>
        <Heading level={4} style={{ marginBottom: '8px' }}>
          Blog Post Title
        </Heading>
        <Text variant="caption" style={{ marginBottom: '16px' }}>
          Published on January 1, 2025
        </Text>
        <Text>
          A short description of the blog post that provides a preview of the content
          for the reader.
        </Text>
      </CardBody>
      <CardFooter>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  ),
};
