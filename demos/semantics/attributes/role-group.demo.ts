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
    tagName: "fieldset",
    slot: `<input type="text" placeholder="Enter value">
<button>Go</button>`,
  },
  selectWithButton: {
    class: "",
    tagName: "fieldset",
    slot: `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Action</button>`,
  },
  multipleInputs: {
    class: "",
    tagName: "fieldset",
    slot: `<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<button>Save</button>`,
  },
  paginationExample: {
    class: "",
    tagName: "nav",
    "aria-label": "Pagination",
    slot: `<a href="#" role="button" disabled>Previous</a>
<a href="#page-1" role="button">1</a>
<a href="#page-2" role="button" aria-current="page">2</a>
<a href="#page-3" role="button">3</a>
<a href="#page-3" role="button">Next</a>`,
  },
  newsletterExample: {
    class: "",
    tagName: "fieldset",
    slot: `<input type="email" id="email" placeholder="your@email.com">
<button type="submit">Subscribe</button>`,
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

  newsletterExample(args: RoleGroupDemoArgsType = {}) {
    return renderElement("form", {
      slot: `<label for="email">Subscribe to our newsletter</label>
${this.render({ ...RoleGroupDemoArgs.newsletterExample, ...args })}`,
    });
  },
};
