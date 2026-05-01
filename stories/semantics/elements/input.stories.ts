import type { Meta, StoryObj } from "@storybook/html";
import { InputDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<input>",
};

export default meta;

export const basicInputs: StoryObj = {
  args: { html: InputDemo.basicInputs },
  render: (args) => args.html,
};

export const datetimeInput: StoryObj = {
  args: { html: InputDemo.datetimeInput },
  render: (args) => args.html,
};

export const searchInput: StoryObj = {
  args: { html: InputDemo.searchInput },
  render: (args) => args.html,
};

export const colorInput: StoryObj = {
  args: { html: InputDemo.colorInput },
  render: (args) => args.html,
};

export const fileInput: StoryObj = {
  args: { html: InputDemo.fileInput },
  render: (args) => args.html,
};

export const basicCheckbox: StoryObj = {
  args: { html: InputDemo.basicCheckbox },
  render: (args) => args.html,
};

export const horizontalCheckbox: StoryObj = {
  args: { html: InputDemo.horizontalCheckbox },
  render: (args) => args.html,
};

export const singleCheckbox: StoryObj = {
  args: { html: InputDemo.singleCheckbox },
  render: (args) => args.html,
};

export const basicRadio: StoryObj = {
  args: { html: InputDemo.basicRadio },
  render: (args) => args.html,
};

export const horizontalRadio: StoryObj = {
  args: { html: InputDemo.horizontalRadio },
  render: (args) => args.html,
};

export const basicRange: StoryObj = {
  args: { html: InputDemo.basicRange },
  render: (args) => args.html,
};

export const rangeWithMinMax: StoryObj = {
  args: { html: InputDemo.rangeWithMinMax },
  render: (args) => args.html,
};

export const rangeWithStep: StoryObj = {
  args: { html: InputDemo.rangeWithStep },
  render: (args) => args.html,
};

export const basicSwitch: StoryObj = {
  args: { html: InputDemo.basicSwitch },
  render: (args) => args.html,
};
