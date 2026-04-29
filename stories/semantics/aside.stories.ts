import type { Meta, StoryObj } from '@storybook/html';
import { AsideDemo, AsideDemoArgs, type AsideDemoArgsType } from '@demos/semantics/aside.demo';

const meta: Meta<AsideDemoArgsType> = {
  title: 'Semantics/<aside>',
};

export default meta;

export const RightSidebar: StoryObj<AsideDemoArgsType> = {
  args: AsideDemoArgs.rightSidebar,
  render(args) {
    return AsideDemo.rightSidebar(args);
  }
};

export const LeftSidebar: StoryObj<AsideDemoArgsType> = {
  args: AsideDemoArgs.leftSidebar,
  render(args) {
    return AsideDemo.leftSidebar(args);
  }
};
