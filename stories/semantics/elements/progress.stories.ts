import type { Meta, StoryObj } from "@storybook/html";
import { ProgressDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<progress>",
};

export default meta;

export const basicProgress: StoryObj = {
  args: { html: ProgressDemo.basicProgress },
  render: (args) => args.html,
};

export const indeterminate: StoryObj = {
  args: { html: ProgressDemo.indeterminate },
  render: (args) => args.html,
};

export const withLabel: StoryObj = {
  args: { html: ProgressDemo.withLabel },
  render: (args) => args.html,
};
