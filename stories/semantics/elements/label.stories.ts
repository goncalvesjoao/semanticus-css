import type { Meta, StoryObj } from "@storybook/html";
import { LabelDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<label>",
};

export default meta;

export const InputInside: StoryObj = {
  render: () => LabelDemo.inputInside(),
};

export const InputOutside: StoryObj = {
  render: () => LabelDemo.inputOutside(),
};
