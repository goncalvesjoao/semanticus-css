import type { Meta, StoryObj } from '@storybook/html';
import rawDemoSemanticsHtml from './demo/semantics.html?raw';
import rawDemoDocsPageExampleHtml from './demo/docs-page-example.html?raw';

const meta: Meta = {
  title: 'Demo',
};

export default meta;

export const Semantics: StoryObj = {
  render: () => rawDemoSemanticsHtml,
};

export const DocsPageExample: StoryObj = {
  render: () => rawDemoDocsPageExampleHtml,
};
