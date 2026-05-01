import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => `
    <button id="default-button">Click me</button>
  `,
};
