import type { Meta, StoryObj } from "@storybook/html";
import { ADemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const AriaCurrentLink: StoryObj = {
  render: () => ADemo.ariaCurrent(),
};
