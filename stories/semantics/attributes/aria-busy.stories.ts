import type { Meta, StoryObj } from "@storybook/html";
import { AriaBusyDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-busy]",
  parameters: {},
};

export default meta;

export const BasicLoading: StoryObj = {
  render: () => AriaBusyDemo.basicLoading(),
};

export const LoadingButton: StoryObj = {
  render: () => AriaBusyDemo.loadingButton(),
};

export const LoadingCard: StoryObj = {
  render: () => AriaBusyDemo.loadingCard(),
};

export const LoadingForm: StoryObj = {
  render: () => AriaBusyDemo.loadingForm(),
};
