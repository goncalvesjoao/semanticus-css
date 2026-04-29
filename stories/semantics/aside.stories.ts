import type { Meta, StoryObj } from '@storybook/html';
import { AsideDemo, AsideDemoArgs, type AsideDemoArgsType } from '@demos/semantics/aside.demo';

const meta: Meta<AsideDemoArgsType> = {
  title: 'Semantics/<aside>',
};

export default meta;

export const PagesLinksSidebar: StoryObj<AsideDemoArgsType> = {
  args: AsideDemoArgs.pagesLinksSidebar,
  render(args) {
    return AsideDemo.pagesLinksSidebar(args);
  }
};

export const PageLinksSidebar: StoryObj<AsideDemoArgsType> = {
  args: AsideDemoArgs.pageLinksSidebar,
  render(args) {
    return AsideDemo.pageLinksSidebar(args);
  }
};
