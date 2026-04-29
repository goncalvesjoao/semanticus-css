import type { Meta, StoryObj } from '@storybook/html';
import { HgroupDemo, HgroupDemoArgs, type HgroupDemoArgsType } from '@demos/semantics/hgroup.demo';

const meta: Meta<HgroupDemoArgsType> = {
  title: 'Semantics/<hgroup>',
};

export default meta;

export const Default: StoryObj<HgroupDemoArgsType> = {
  args: HgroupDemoArgs.default,
  render(args) {
    return HgroupDemo.default(args);
  }
};
