import type { Meta, StoryObj } from "@storybook/html";
import { SelectDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<select>",
};

export default meta;

export const BasicSelect: StoryObj = {
  render: () => SelectDemo.basicSelect(),
};

export const MultipleSelect: StoryObj = {
  render: () => SelectDemo.multipleSelect(),
};

export const WithOptgroup: StoryObj = {
  render: () => SelectDemo.withOptgroup(),
};

export const Dropdown: StoryObj = {
  render: () => SelectDemo.dropdown(),
};
