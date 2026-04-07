import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Stack } from './Stack';
import { Grid, GridItem } from './Grid';
import { Card, CardBody } from '../Card/Card';
import { Text } from '../Typography/Text';
import { Heading } from '../Typography/Heading';

const meta: Meta = {
  title: 'Components/Layout',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const PlaceholderBox = ({
  label,
  height = '60px',
  color = '#6366f1',
}: {
  label: string;
  height?: string;
  color?: string;
}) => (
  <div
    style={{
      backgroundColor: color,
      height,
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: 500,
    }}
  >
    {label}
  </div>
);

export const ContainerDemo: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '200px', padding: '24px' }}>
      <Container maxWidth="md">
        <PlaceholderBox label="Container (max-width: md = 768px)" height="80px" />
      </Container>
    </div>
  ),
};

export const StackColumn: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Stack direction="column" gap="12px">
        <PlaceholderBox label="Item 1" />
        <PlaceholderBox label="Item 2" color="#8b5cf6" />
        <PlaceholderBox label="Item 3" color="#ec4899" />
      </Stack>
    </div>
  ),
};

export const StackRow: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Stack direction="row" gap="12px" align="center">
        <PlaceholderBox label="Item 1" />
        <PlaceholderBox label="Item 2" color="#8b5cf6" />
        <PlaceholderBox label="Item 3" color="#ec4899" />
      </Stack>
    </div>
  ),
};

export const StackJustify: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['start', 'center', 'end', 'space-between', 'space-around'] as const).map((justify) => (
        <div key={justify}>
          <Text variant="caption" style={{ marginBottom: '4px' }}>
            justify: {justify}
          </Text>
          <Stack direction="row" gap="8px" justify={justify} fullWidth style={{ border: '1px dashed #cbd5e1', padding: '8px', borderRadius: '6px' }}>
            <PlaceholderBox label="A" />
            <PlaceholderBox label="B" color="#8b5cf6" />
            <PlaceholderBox label="C" color="#ec4899" />
          </Stack>
        </div>
      ))}
    </div>
  ),
};

export const GridBasic: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Grid columns={3} gap="16px">
        {Array.from({ length: 6 }, (_, i) => (
          <PlaceholderBox key={i} label={`Cell ${i + 1}`} color={i % 2 === 0 ? '#6366f1' : '#8b5cf6'} />
        ))}
      </Grid>
    </div>
  ),
};

export const GridWithSpan: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Grid columns={12} gap="16px">
        <GridItem colSpan={8}>
          <PlaceholderBox label="Main (col-span: 8)" height="120px" />
        </GridItem>
        <GridItem colSpan={4}>
          <PlaceholderBox label="Sidebar (col-span: 4)" height="120px" color="#8b5cf6" />
        </GridItem>
        <GridItem colSpan={4}>
          <PlaceholderBox label="col-span: 4" color="#ec4899" />
        </GridItem>
        <GridItem colSpan={4}>
          <PlaceholderBox label="col-span: 4" color="#f59e0b" />
        </GridItem>
        <GridItem colSpan={4}>
          <PlaceholderBox label="col-span: 4" color="#22c55e" />
        </GridItem>
      </Grid>
    </div>
  ),
};

export const FullPageLayout: Story = {
  render: () => (
    <Container maxWidth="xl" style={{ padding: '32px 16px' }}>
      <Stack direction="column" gap="32px">
        <Heading level={1}>Dashboard</Heading>
        <Grid columns={3} gap="16px">
          {(['Users', 'Revenue', 'Growth'] as const).map((label) => (
            <Card key={label} elevation="md">
              <CardBody>
                <Text variant="label">{label}</Text>
                <Heading level={3} style={{ marginTop: '8px' }}>
                  {label === 'Users' ? '12,450' : label === 'Revenue' ? '$84.2K' : '+23%'}
                </Heading>
              </CardBody>
            </Card>
          ))}
        </Grid>
        <Card elevation="sm">
          <CardBody>
            <Heading level={4} style={{ marginBottom: '16px' }}>
              Recent Activity
            </Heading>
            <Stack direction="column" gap="12px">
              {['New user signed up', 'Payment processed', 'Report generated'].map((item) => (
                <Text key={item} variant="body">
                  • {item}
                </Text>
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  ),
};
