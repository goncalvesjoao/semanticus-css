import type { Meta, StoryObj } from "@storybook/html";
import { ADemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const ariaCurrent: StoryObj = {
  args: { html: ADemo.ariaCurrent },
  render: (args) => args.html,
};
