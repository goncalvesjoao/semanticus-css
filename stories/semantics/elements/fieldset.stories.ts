import type { Meta, StoryObj } from "@storybook/html";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const Basic: StoryObj = {
  render: () => FieldsetDemo.basic(),
};

export const InsideForm: StoryObj = {
  render: () => FieldsetDemo.insideForm(),
};

export const Disabled_: StoryObj = {
  render: () => FieldsetDemo.disabled_(),
};

export const WithGroup: StoryObj = {
  render: () => FieldsetDemo.withGroup(),
};
