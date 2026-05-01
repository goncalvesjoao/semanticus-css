import type { Meta, StoryObj } from "@storybook/html";
import { LabelDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<label>",
};

export default meta;

export const inputInside: StoryObj = {
  args: { html: LabelDemo.inputInside },
  render: (args) => args.html,
};

export const inputOutside: StoryObj = {
  args: { html: LabelDemo.inputOutside },
  render: (args) => args.html,
};
