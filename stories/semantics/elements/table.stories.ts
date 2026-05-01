import type { Meta, StoryObj } from "@storybook/html";
import { TableDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<table>",
};

export default meta;

export const basicTable: StoryObj = {
  args: { html: TableDemo.basicTable },
  render: (args) => args.html,
};
