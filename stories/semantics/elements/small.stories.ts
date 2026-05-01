import type { Meta, StoryObj } from "@storybook/html";
import { SmallDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<small>",
};

export default meta;

export const helperText: StoryObj = {
  args: { html: SmallDemo.helperText },
  render: (args) => args.html,
};
