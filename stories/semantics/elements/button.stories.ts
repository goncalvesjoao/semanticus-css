import type { Meta, StoryObj } from "@storybook/html";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const Basic: StoryObj = {
  render: () => ButtonDemo.basic(),
};

export const FormButtons: StoryObj = {
  render: () => ButtonDemo.formButtons(),
};

export const ResetButton: StoryObj = {
  render: () => ButtonDemo.resetButton(),
};

export const LoginForm: StoryObj = {
  render: () => ButtonDemo.loginForm(),
};
