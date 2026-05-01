import type { Meta, StoryObj } from "@storybook/html";
import {
  RoleButtonDemo,
  RoleButtonDemoArgs,
  type RoleButtonDemoArgsType,
} from "@demos/semantics/attributes";

const meta: Meta<RoleButtonDemoArgsType> = {
  title: "Semantics/Attributes/[role=button]",
  parameters: {},
};

export default meta;

export const basic: StoryObj<RoleButtonDemoArgsType> = {
  args: RoleButtonDemoArgs.basic,
  render: (args) => RoleButtonDemo.basic(args),
};
