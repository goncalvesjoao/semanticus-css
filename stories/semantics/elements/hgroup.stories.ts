import type { Meta, StoryObj } from "@storybook/html";
import {
  HgroupDemo,
  HgroupDemoArgs,
  type HgroupDemoArgsType,
} from "@demos/semantics/elements";

const meta: Meta<HgroupDemoArgsType> = {
  title: "Semantics/Elements/<hgroup>",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<HgroupDemoArgsType> = {
  args: HgroupDemoArgs.default,
  render(args) {
    return HgroupDemo.default(args);
  },
};
