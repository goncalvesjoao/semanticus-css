import type { Meta, StoryObj } from '@storybook/html';
import { NavDemo, NavDemoArgs } from '@demos/semantics/nav.demo';

const meta: Meta<NavDemoArgs> = {
  title: 'Semantics/<nav>',
};

export default meta;

export const Overview: StoryObj<NavDemoArgs> = {
  args: {
    slot: "<h4>Logo</h4>",
  },
  render: (args) => {
    return NavDemo.base(args);
  }
};
