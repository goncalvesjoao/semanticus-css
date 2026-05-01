import { renderElement } from "@demos/utils";

export type RoleButtonDemoArgsType = Record<string, string> & {
  slot?: string;
  tagName?: string;
  class?: string;
};

export const RoleButtonDemoArgs = {
  basic: {
    class: "",
    tagName: "div",
    slot: "Div as button",
  },
};

export const RoleButtonDemo = {
  render(args: RoleButtonDemoArgsType) {
    const { tagName, ...rest } = args;

    rest.role = "button";
    rest.tabindex = rest.tabindex ?? "0";

    return renderElement(tagName || "div", rest);
  },

  basic(args: RoleButtonDemoArgsType = {}) {
    return this.render({ ...RoleButtonDemoArgs.basic, ...args });
  },
};
