import type { Meta, StoryObj } from "@storybook/html";
import { TypographyDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Typography",
};

export default meta;

export const Headings: StoryObj = {
  render: () => TypographyDemo.headings(),
};

export const Hgroup: StoryObj = {
  render: () => TypographyDemo.hgroup(),
};

export const Inline: StoryObj = {
  render: () => TypographyDemo.inline(),
};

export const Lists: StoryObj = {
  render: () => TypographyDemo.lists(),
};

export const Blockquote: StoryObj = {
  render: () => TypographyDemo.blockquote(),
};

export const Hr: StoryObj = {
  render: () => TypographyDemo.hr(),
};

export const Address: StoryObj = {
  render: () => TypographyDemo.address(),
};

export const CodeInline: StoryObj = {
  render: () => TypographyDemo.codeInline(),
};

export const CodeKbd: StoryObj = {
  render: () => TypographyDemo.codeKbd(),
};

export const CodeSamp: StoryObj = {
  render: () => TypographyDemo.codeSamp(),
};
