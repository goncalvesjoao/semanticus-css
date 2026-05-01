import { renderElement } from "@demos/utils";

export type RoleToolbarDemoArgsType = Record<string, string> & {
  slot?: string;
  tagName?: string;
  class?: string;
};

export const RoleToolbarDemoArgs = {
  basic: {
    class: "",
    tagName: "div",
    slot: `<button>Bold</button>
<button>Italic</button>
<button>Underline</button>`,
  },
};

export const RoleToolbarDemo = {
  render(args: RoleToolbarDemoArgsType) {
    const { tagName, ...rest } = args;

    rest.role = "toolbar";

    return renderElement(tagName || "div", rest);
  },

  basic(args: RoleToolbarDemoArgsType = {}) {
    return this.render({ ...RoleToolbarDemoArgs.basic, ...args });
  },
};
