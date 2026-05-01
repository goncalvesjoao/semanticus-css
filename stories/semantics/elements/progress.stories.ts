import type { Meta, StoryObj } from "@storybook/html";
import { ProgressDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<progress>",
};

export default meta;

export const BasicProgress: StoryObj = {
  render: () => ProgressDemo.basicProgress(),
};

export const Indeterminate: StoryObj = {
  render: () => ProgressDemo.indeterminate(),
};

export const WithLabel: StoryObj = {
  render: () => ProgressDemo.withLabel(),
};
