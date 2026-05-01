import type { Meta, StoryObj } from "@storybook/html";
import {
  FooterDemo,
  FooterDemoArgs,
  type FooterDemoArgsType,
} from "@demos/semantics/elements";

const meta: Meta<FooterDemoArgsType> = {
  title: "Semantics/Elements/<footer>",
};

export default meta;

export const Default: StoryObj<FooterDemoArgsType> = {
  args: FooterDemoArgs.default,
  render(args) {
    return FooterDemo.default(args);
  },
};
