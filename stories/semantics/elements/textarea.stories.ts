import type { Meta, StoryObj } from "@storybook/html";
import { TextareaDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<textarea>",
};

export default meta;

export const BasicTextarea: StoryObj = {
  render: () => TextareaDemo.basicTextarea(),
};

export const WithLabel: StoryObj = {
  render: () => TextareaDemo.withLabel(),
};

export const WithRows: StoryObj = {
  render: () => TextareaDemo.withRows(),
};
