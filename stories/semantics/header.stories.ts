import type { Meta, StoryObj } from '@storybook/html';
import { HeaderDemo, HeaderDemoArgs, type HeaderDemoArgsType } from '@demos/semantics/header.demo';

const meta: Meta<HeaderDemoArgsType> = {
  title: 'Semantics/<header>',
};

export default meta;

export const Overview: StoryObj<HeaderDemoArgsType> = {
  args: HeaderDemoArgs.logoTaglineLinks,
  render(args) {
    return HeaderDemo.logoTaglineLinks(args);
  }
};
