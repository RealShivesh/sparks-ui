# sparks-ui

A React UI component library (plain JavaScript) with design tokens, full theming (light/dark + custom), and accessibility built-in.

## Features

- ⚡ **Tree-shakable** — import only what you use
- 🎨 **Theming** — light/dark modes + fully customisable via `ThemeProvider`
- ♿ **Accessible** — ARIA attributes and keyboard navigation throughout
- 🟨 **Plain JavaScript** — no TypeScript, no type declarations required
- 📖 **Storybook** — interactive component previews
- 🪄 **Zero CSS files** — all styling via inline styles, fully self-contained

## Installation

```bash
npm install sparks-ui
# peer dependencies
npm install react react-dom
```

## Quick Start

```tsx
import { ThemeProvider, Button, Input, Card, CardBody } from 'sparks-ui';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Card>
        <CardBody>
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Button variant="primary">Submit</Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}
```

## Theming

Wrap your app with `ThemeProvider` to enable theming.

```tsx
import { ThemeProvider, useTheme } from 'sparks-ui';

// Toggle light/dark mode
function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  return <button onClick={toggleMode}>Switch to {mode === 'light' ? 'dark' : 'light'}</button>;
}

// Custom theme overrides
<ThemeProvider
  defaultMode="light"
  theme={{
    colors: {
      brand: {
        default: '#7c3aed',
        hover: '#6d28d9',
        // ...
      },
    },
  }}
>
  <App />
</ThemeProvider>
```

## Components

### Button

```tsx
import { Button } from 'sparks-ui';

// Variants: primary | secondary | ghost | danger | outline
// Sizes: sm | md | lg

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" isLoading>Loading...</Button>
<Button variant="ghost" leftIcon={<PlusIcon />}>Add Item</Button>
<Button isDisabled>Disabled</Button>
```

### Input

```tsx
import { Input, SearchIcon } from 'sparks-ui';

<Input
  label="Search"
  type="search"
  placeholder="Search..."
  prefix={<SearchIcon size={16} />}
  helperText="Enter a keyword to search"
/>

<Input
  label="Email"
  type="email"
  errorText="Please enter a valid email"
  isRequired
/>
```

### Typography

```tsx
import { Text, Heading } from 'sparks-ui';

// Heading levels 1–6
<Heading level={1}>Page Title</Heading>
<Heading level={3}>Section</Heading>

// Text variants: body | caption | label | code
<Text variant="body">Regular paragraph text.</Text>
<Text variant="caption">Smaller supporting text.</Text>
<Text variant="code">const x = 42;</Text>
<Text weight="bold" size="lg">Large bold text</Text>
```

### Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'sparks-ui';

// Elevations: none | sm | md | lg
<Card elevation="md" isInteractive>
  <CardHeader>
    <Heading level={4}>Card Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>Card content goes here.</Text>
  </CardBody>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

### Layout

```tsx
import { Container, Stack, Grid, GridItem } from 'sparks-ui';

// Container: constrain max-width and center content
<Container maxWidth="xl">
  <p>Page content</p>
</Container>

// Stack: flex layout helper
<Stack direction="row" gap="16px" align="center" justify="space-between">
  <Button>Left</Button>
  <Button>Right</Button>
</Stack>

// Grid: CSS grid layout
<Grid columns={12} gap="16px">
  <GridItem colSpan={8}>Main content</GridItem>
  <GridItem colSpan={4}>Sidebar</GridItem>
</Grid>
```

### Icon

```tsx
import { Icon, CheckIcon, SearchIcon } from 'sparks-ui';

// Use the Icon component with a name string
<Icon name="check" size={20} color="#22c55e" aria-label="Confirmed" />

// Or import individual icon components directly
<CheckIcon size={24} aria-label="Success" />
<SearchIcon size={16} />
```

Available icons: `check`, `x`, `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`, `search`, `user`, `home`, `menu`, `plus`, `minus`, `alert-circle`, `info`, `external-link`, `eye`, `eye-off`

## Design Tokens

```tsx
import { colors, spacing, typography, borderRadius, shadows } from 'sparks-ui';

// Use raw tokens in custom components
const myStyle = {
  padding: spacing[4],           // '1rem'
  fontSize: typography.fontSizes.sm,  // '0.875rem'
  borderRadius: borderRadius.md, // '0.375rem'
  boxShadow: shadows.md,
};
```

## Tree-Shaking

Each component can be imported via subpath exports:

```tsx
import { Button } from 'sparks-ui/button';
import { Input } from 'sparks-ui/input';
import { Card } from 'sparks-ui/card';
import { ThemeProvider, useTheme } from 'sparks-ui/theme';
import { colors, spacing } from 'sparks-ui/tokens';
```

## Development

```bash
# Build the library
npm run build

# Start Storybook
npm run storybook

# Lint
npm run lint

# Format
npm run format
```

## License

MIT
