import { renderElement } from "@demos/utils";

export type RoleSearchDemoArgsType = Record<string, string> & {
  slot?: string;
  tagName?: string;
  class?: string;
};

export const RoleSearchDemoArgs = {
  basic: {
    class: "",
    tagName: "form",
    slot: `<input type="search" placeholder="Search...">
<button type="submit">Search</button>`,
  },
  withIconButton: {
    class: "",
    tagName: "form",
    slot: `<input type="search" placeholder="Search products...">
<button type="submit" aria-label="Search">→</button>`,
  },
  filterSearch: {
    class: "",
    tagName: "form",
    slot: `<select aria-label="Category">
  <option>All Categories</option>
  <option>Products</option>
  <option>Services</option>
  <option>Support</option>
</select>
<input type="search" placeholder="Search...">
<button type="submit">Go</button>`,
  },
};

export const RoleSearchDemo = {
  render(args: RoleSearchDemoArgsType) {
    const { tagName, ...rest } = args;

    rest.role = "search";

    return renderElement(tagName || "form", rest);
  },

  basic(args: RoleSearchDemoArgsType = {}) {
    return this.render({ ...RoleSearchDemoArgs.basic, ...args });
  },

  withIconButton(args: RoleSearchDemoArgsType = {}) {
    return this.render({ ...RoleSearchDemoArgs.withIconButton, ...args });
  },

  filterSearch(args: RoleSearchDemoArgsType = {}) {
    return this.render({ ...RoleSearchDemoArgs.filterSearch, ...args });
  },
};
