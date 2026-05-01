import type { Meta, StoryObj } from "@storybook/html";
import {
  RoleSearchDemo,
  RoleSearchDemoArgs,
  type RoleSearchDemoArgsType,
} from "@demos/semantics/attributes";

const meta: Meta<RoleSearchDemoArgsType> = {
  title: "Semantics/Attributes/[role=search]",
  parameters: {},
};

export default meta;

export const basic: StoryObj<RoleSearchDemoArgsType> = {
  args: RoleSearchDemoArgs.basic,
  render: (args) => RoleSearchDemo.basic(args),
};

export const withIconButton: StoryObj<RoleSearchDemoArgsType> = {
  args: RoleSearchDemoArgs.withIconButton,
  render: (args) => RoleSearchDemo.withIconButton(args),
};

export const filterSearch: StoryObj<RoleSearchDemoArgsType> = {
  args: RoleSearchDemoArgs.filterSearch,
  render: (args) => RoleSearchDemo.filterSearch(args),
};
