import type { Meta, StoryObj } from "@storybook/html";
import {
  RoleGroupDemo,
  RoleGroupDemoArgs,
  type RoleGroupDemoArgsType,
} from "@demos/semantics/attributes";

const meta: Meta<RoleGroupDemoArgsType> = {
  title: "Semantics/Attributes/[role=group]",
  parameters: {},
};

export default meta;

export const basic: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.basic,
  render: (args) => RoleGroupDemo.basic(args),
};

export const inputWithButton: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.inputWithButton,
  render: (args) => RoleGroupDemo.inputWithButton(args),
};

export const selectWithButton: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.selectWithButton,
  render: (args) => RoleGroupDemo.selectWithButton(args),
};

export const multipleInputs: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.multipleInputs,
  render: (args) => RoleGroupDemo.multipleInputs(args),
};

export const paginationExample: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.paginationExample,
  render: (args) => RoleGroupDemo.paginationExample(args),
};

export const newsletterExample: StoryObj<RoleGroupDemoArgsType> = {
  args: RoleGroupDemoArgs.newsletterExample,
  render: (args) => RoleGroupDemo.newsletterExample(args),
};
