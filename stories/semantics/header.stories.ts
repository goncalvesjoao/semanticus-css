import type { Meta, StoryObj } from '@storybook/html';
import { HeaderDemo, HeaderDemoArgs, type HeaderDemoArgsType } from '@demos/semantics/header.demo';

const meta: Meta<HeaderDemoArgsType> = {
  title: 'Semantics/<header>',
};

export default meta;

export const Default: StoryObj<HeaderDemoArgsType> = {
  args: HeaderDemoArgs.default,
  render(args) {
    return HeaderDemo.default(args);
  }
};

export const SearchDropdownAndLinks: StoryObj<HeaderDemoArgsType> = {
  args: HeaderDemoArgs.searchDropdownAndLinks,
  render(args) {
    return HeaderDemo.searchDropdownAndLinks(args);
  }
};
