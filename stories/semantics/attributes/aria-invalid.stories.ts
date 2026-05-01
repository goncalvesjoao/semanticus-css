import type { Meta, StoryObj } from "@storybook/html";
import { AriaInvalidDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-invalid]",
  parameters: {},
};

export default meta;

export const Input: StoryObj = {
  render: () => AriaInvalidDemo.input(),
};

export const InputHelper: StoryObj = {
  render: () => AriaInvalidDemo.inputHelper(),
};

export const Checkbox: StoryObj = {
  render: () => AriaInvalidDemo.checkbox(),
};

export const Radio: StoryObj = {
  render: () => AriaInvalidDemo.radio(),
};

export const Select: StoryObj = {
  render: () => AriaInvalidDemo.select(),
};

export const Switch_: StoryObj = {
  name: "Switch",
  render: () => AriaInvalidDemo.switch_(),
};

export const Textarea: StoryObj = {
  render: () => AriaInvalidDemo.textarea(),
};

export const TextareaHelper: StoryObj = {
  render: () => AriaInvalidDemo.textareaHelper(),
};
