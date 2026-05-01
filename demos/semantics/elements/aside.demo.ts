import { renderElement } from "@demos/utils";
import { NavDemo } from "@demos/semantics/elements/nav.demo";

export type AsideDemoArgsType = Record<string, string> & {
  slot?: string;
  class?: string;
};

export const AsideDemoArgs = {
  leftSidebar: {
    class: "sidebar",
    slot: `<h4>Guide</h4>
${NavDemo.pagesLinks()}

<a href="#" role="button" class="ghost">Support</a>`,
  },

  rightSidebar: {
    class: "sidebar",
    slot: `<h4>On this page</h4>
${NavDemo.pageLinks()}`,
  },
};

export const AsideDemo = {
  render: renderElement.bind(null, "aside"),

  leftSidebar(args: AsideDemoArgsType = {}) {
    const newArgs = { ...AsideDemoArgs.leftSidebar, ...args };
    newArgs.class = `sidebar ${newArgs.class || ""}`.trim();

    return this.render(newArgs);
  },

  rightSidebar(args: AsideDemoArgsType = {}) {
    const newArgs = { ...AsideDemoArgs.rightSidebar, ...args };
    newArgs.class = `sidebar ${newArgs.class || ""}`.trim();

    return this.render(newArgs);
  },
};
