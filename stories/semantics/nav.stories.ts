import type { Meta, StoryObj } from '@storybook/html';
import { NavDemo, NavDemoArgs, type NavDemoArgsType } from '@demos/semantics/nav.demo';

const meta: Meta<NavDemoArgsType> = {
  title: 'Semantics/<nav>',
};

export default meta;

export const Overview: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.logoTaglineLinks,
  render(args) {
    return NavDemo.logoTaglineLinks(args);
  }
};
