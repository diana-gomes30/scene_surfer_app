import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    storyStoreV7: false,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@__mocks__': path.resolve(__dirname, '../src/__mocks__'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@consts': path.resolve(__dirname, '../src/consts'),
        '@fetchers': path.resolve(__dirname, '../src/fetchers'),
        '@interfaces': path.resolve(__dirname, '../src/interfaces'),
      };
    }
    return config;
  },
};
export default config;
