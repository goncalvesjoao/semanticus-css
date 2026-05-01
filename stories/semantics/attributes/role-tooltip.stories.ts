import type { Meta, StoryObj } from "@storybook/html";
import { RoleTooltipDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=tooltip]",
  parameters: {},
};

export default meta;

export const Syntax: StoryObj = {
  render: () => RoleTooltipDemo.syntax(),
};

export const Placement: StoryObj = {
  render: () => RoleTooltipDemo.placement(),
};
