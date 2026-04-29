import type { Meta, StoryObj } from '@storybook/html';
import { ArticleDemo, ArticleDemoArgs, type ArticleDemoArgsType } from '@demos/semantics/article.demo';

const meta: Meta<ArticleDemoArgsType> = {
  title: 'Semantics/<article>',
};

export default meta;

export const Overview: StoryObj<ArticleDemoArgsType> = {
  args: ArticleDemoArgs.hgroup,
  render(args) {
    return ArticleDemo.hgroup(args);
  }
};
