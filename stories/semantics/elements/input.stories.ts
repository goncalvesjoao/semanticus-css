import type { Meta, StoryObj } from "@storybook/html";
import { InputDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<input>",
};

export default meta;

export const BasicInputs: StoryObj = {
  render: () => InputDemo.basicInputs(),
};

export const DatetimeInput: StoryObj = {
  render: () => InputDemo.datetimeInput(),
};

export const SearchInput: StoryObj = {
  render: () => InputDemo.searchInput(),
};

export const ColorInput: StoryObj = {
  render: () => InputDemo.colorInput(),
};

export const FileInput: StoryObj = {
  render: () => InputDemo.fileInput(),
};

export const BasicCheckbox: StoryObj = {
  render: () => InputDemo.basicCheckbox(),
};

export const HorizontalCheckbox: StoryObj = {
  render: () => InputDemo.horizontalCheckbox(),
};

export const SingleCheckbox: StoryObj = {
  render: () => InputDemo.singleCheckbox(),
};

export const BasicRadio: StoryObj = {
  render: () => InputDemo.basicRadio(),
};

export const HorizontalRadio: StoryObj = {
  render: () => InputDemo.horizontalRadio(),
};

export const BasicRange: StoryObj = {
  render: () => InputDemo.basicRange(),
};

export const RangeWithMinMax: StoryObj = {
  render: () => InputDemo.rangeWithMinMax(),
};

export const RangeWithStep: StoryObj = {
  render: () => InputDemo.rangeWithStep(),
};

export const BasicSwitch: StoryObj = {
  render: () => InputDemo.basicSwitch(),
};
