import type { Meta, StoryObj } from "@storybook/html";
import {
  RoleToolbarDemo,
  RoleToolbarDemoArgs,
  type RoleToolbarDemoArgsType,
} from "@demos/semantics/attributes";

const meta: Meta<RoleToolbarDemoArgsType> = {
  title: "Semantics/Attributes/[role=toolbar]",
  parameters: {},
};

export default meta;

export const basic: StoryObj<RoleToolbarDemoArgsType> = {
  args: RoleToolbarDemoArgs.basic,
  render: (args) => RoleToolbarDemo.basic(args),
};
