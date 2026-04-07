import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'components/Button/Button': 'src/components/Button/Button.tsx',
    'components/Icon/Icon': 'src/components/Icon/Icon.tsx',
    'components/Typography/Text': 'src/components/Typography/Text.tsx',
    'components/Typography/Heading': 'src/components/Typography/Heading.tsx',
    'components/Input/Input': 'src/components/Input/Input.tsx',
    'components/Card/Card': 'src/components/Card/Card.tsx',
    'components/Container/Container': 'src/components/Container/Container.tsx',
    'components/Container/Stack': 'src/components/Container/Stack.tsx',
    'components/Container/Grid': 'src/components/Container/Grid.tsx',
    'theme/index': 'src/theme/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'icons/index': 'src/icons/index.tsx',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  outDir: 'dist',
  target: 'es2020',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
