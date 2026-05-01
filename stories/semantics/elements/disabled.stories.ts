import type { Meta, StoryObj } from "@storybook/html";
import { DisabledDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/[disabled]",
};

export default meta;

export const Button: StoryObj = {
  render: () => DisabledDemo.button(),
};

export const Input: StoryObj = {
  render: () => DisabledDemo.input(),
};

export const Range: StoryObj = {
  render: () => DisabledDemo.range(),
};

export const Select: StoryObj = {
  render: () => DisabledDemo.select(),
};

export const Switch_: StoryObj = {
  render: () => DisabledDemo.switch_(),
};

export const Textarea: StoryObj = {
  render: () => DisabledDemo.textarea(),
};
