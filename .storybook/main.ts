import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  framework: '@storybook/html-vite',
  stories: ['../stories/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-docs']
};

export default config;
