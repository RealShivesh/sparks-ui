import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#020617' },
        { name: 'gray', value: '#f8fafc' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === '#020617';
      return React.createElement(
        ThemeProvider,
        { defaultMode: isDark ? 'dark' : 'light' },
        React.createElement(
          'div',
          {
            style: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              padding: '16px',
            },
          },
          React.createElement(Story)
        )
      );
    },
  ],
};

export default preview;
