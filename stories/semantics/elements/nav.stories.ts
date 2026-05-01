import type { Meta, StoryObj } from "@storybook/html";
import {
  NavDemo,
  NavDemoArgs,
  type NavDemoArgsType,
} from "@demos/semantics/elements";

const meta: Meta<NavDemoArgsType> = {
  title: "Semantics/Elements/<nav>",
};

export default meta;

export const LogoTaglineLinks: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.logoTaglineLinks,
  render(args) {
    return NavDemo.logoTaglineLinks(args);
  },
};

export const SearchDropdownAndLinks: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.searchDropdownAndLinks,
  render(args) {
    return NavDemo.searchDropdownAndLinks(args);
  },
};

export const CopyrightAndContactUs: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.copyrightAndContactUs,
  render(args) {
    return NavDemo.copyrightAndContactUs(args);
  },
};

export const PagesLinks: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.pagesLinks,
  render(args) {
    return NavDemo.pagesLinks(args);
  },
};

export const PageLinks: StoryObj<NavDemoArgsType> = {
  args: NavDemoArgs.pageLinks,
  render(args) {
    return NavDemo.pageLinks(args);
  },
};
