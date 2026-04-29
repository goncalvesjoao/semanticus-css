import type { Meta, StoryObj } from '@storybook/html';
import { ArticleDemo, ArticleDemoArgs, type ArticleDemoArgsType } from '@demos/semantics/article.demo';

const meta: Meta<ArticleDemoArgsType> = {
  title: 'Semantics/<article>',
};

export default meta;

export const Default: StoryObj<ArticleDemoArgsType> = {
  args: ArticleDemoArgs.default,
  render(args) {
    return ArticleDemo.default(args);
  }
};

export const Hgroup: StoryObj<ArticleDemoArgsType> = {
  args: ArticleDemoArgs.hgroup,
  render(args) {
    return ArticleDemo.hgroup(args);
  }
};

export const MultipleParagraphs: StoryObj<ArticleDemoArgsType> = {
  args: ArticleDemoArgs.multipleParagraphs,
  render(args) {
    return ArticleDemo.multipleParagraphs(args);
  }
};
