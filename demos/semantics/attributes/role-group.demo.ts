import { renderElement } from "@demos/utils";

export type RoleGroupDemoArgsType = Record<string, string> & {
  slot?: string;
  tagName?: string;
  class?: string;
};

export const RoleGroupDemoArgs = {
  basic: {
    class: "",
    tagName: "div",
    slot: `<button>One</button>
<button>Two</button>
<button>Three</button>`,
  },
  inputWithButton: {
    class: "",
    tagName: "div",
    slot: `<input type="text" placeholder="Enter value">
<button>Go</button>`,
  },
  selectWithButton: {
    class: "",
    tagName: "div",
    slot: `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Action</button>`,
  },
  multipleInputs: {
    class: "",
    tagName: "div",
    slot: `<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<button>Save</button>`,
  },
  paginationExample: {
    class: "",
    tagName: "nav",
    "aria-label": "Pagination",
    slot: `<button disabled>Previous</button>
<button>1</button>
<button>2</button>
<button>3</button>
<button>Next</button>`,
  },
};

export const RoleGroupDemo = {
  render(args: RoleGroupDemoArgsType) {
    const { tagName, ...rest } = args;

    rest.role = "group";

    return renderElement(tagName || "div", rest);
  },

  basic(args: RoleGroupDemoArgsType = {}) {
    return this.render({ ...RoleGroupDemoArgs.basic, ...args });
  },

  inputWithButton(args: RoleGroupDemoArgsType = {}) {
    return this.render({ ...RoleGroupDemoArgs.inputWithButton, ...args });
  },

  selectWithButton(args: RoleGroupDemoArgsType = {}) {
    return this.render({ ...RoleGroupDemoArgs.selectWithButton, ...args });
  },

  multipleInputs(args: RoleGroupDemoArgsType = {}) {
    return this.render({ ...RoleGroupDemoArgs.multipleInputs, ...args });
  },

  paginationExample(args: RoleGroupDemoArgsType = {}) {
    return this.render({ ...RoleGroupDemoArgs.paginationExample, ...args });
  },
};
