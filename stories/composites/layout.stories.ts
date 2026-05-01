import type { Meta, StoryObj } from "@storybook/html";
import { CompositesLayoutDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Layout",
  parameters: {},
};

export default meta;

export const CommonLayout: StoryObj = {
  render: () => CompositesLayoutDemo.commonLayout(),
};
