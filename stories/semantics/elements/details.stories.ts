import type { Meta, StoryObj } from "@storybook/html";
import { DetailsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<details>",
};

export default meta;

export const Accordion: StoryObj = {
  render: () => DetailsDemo.accordion(),
};

export const BasicDropdown: StoryObj = {
  render: () => DetailsDemo.basicDropdown(),
};

export const DropdownWithRadios: StoryObj = {
  render: () => DetailsDemo.dropdownWithRadios(),
};

export const DropdownWithCheckboxes: StoryObj = {
  render: () => DetailsDemo.dropdownWithCheckboxes(),
};

export const DropdownAsButton: StoryObj = {
  render: () => DetailsDemo.dropdownAsButton(),
};

export const DropdownValidationStates: StoryObj = {
  render: () => DetailsDemo.dropdownValidationStates(),
};

export const DropdownInNav: StoryObj = {
  render: () => DetailsDemo.dropdownInNav(),
};

export const Faq: StoryObj = {
  render: () => DetailsDemo.faq(),
};
