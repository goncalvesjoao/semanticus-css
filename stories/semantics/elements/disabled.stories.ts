import type { Meta, StoryObj } from "@storybook/html";
import { DisabledDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/[disabled]",
};

export default meta;

export const button: StoryObj = {
  args: { html: DisabledDemo.button },
  render: (args) => args.html,
};

export const input: StoryObj = {
  args: { html: DisabledDemo.input },
  render: (args) => args.html,
};

export const range: StoryObj = {
  args: { html: DisabledDemo.range },
  render: (args) => args.html,
};

export const select: StoryObj = {
  args: { html: DisabledDemo.select },
  render: (args) => args.html,
};

export const switch_: StoryObj = {
  name: "Switch",
  args: { html: DisabledDemo.switch_ },
  render: (args) => args.html,
};

export const textarea: StoryObj = {
  args: { html: DisabledDemo.textarea },
  render: (args) => args.html,
};
