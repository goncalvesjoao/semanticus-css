import type { Meta, StoryObj } from "@storybook/html";
import { AriaBusyDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-busy]",
  parameters: {},
};

export default meta;

export const basicLoading: StoryObj = {
  args: { html: AriaBusyDemo.basicLoading },
  render: (args) => args.html,
};

export const loadingButton: StoryObj = {
  args: { html: AriaBusyDemo.loadingButton },
  render: (args) => args.html,
};

export const loadingCard: StoryObj = {
  args: { html: AriaBusyDemo.loadingCard },
  render: (args) => args.html,
};

export const loadingForm: StoryObj = {
  args: { html: AriaBusyDemo.loadingForm },
  render: (args) => args.html,
};
