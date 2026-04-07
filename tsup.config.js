import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.js',
    'components/Button/Button': 'src/components/Button/Button.jsx',
    'components/Icon/Icon': 'src/components/Icon/Icon.jsx',
    'components/Typography/Text': 'src/components/Typography/Text.jsx',
    'components/Typography/Heading': 'src/components/Typography/Heading.jsx',
    'components/Input/Input': 'src/components/Input/Input.jsx',
    'components/Card/Card': 'src/components/Card/Card.jsx',
    'components/Container/Container': 'src/components/Container/Container.jsx',
    'components/Container/Stack': 'src/components/Container/Stack.jsx',
    'components/Container/Grid': 'src/components/Container/Grid.jsx',
    'theme/index': 'src/theme/index.js',
    'tokens/index': 'src/tokens/index.js',
    'icons/index': 'src/icons/index.jsx',
  },
  format: ['cjs', 'esm'],
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
