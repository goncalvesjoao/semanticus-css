import { renderElement } from "@demos/utils";

export type HgroupDemoArgsType = Record<string, string> & {
  slot?: string;
  class?: string;
};

export const HgroupDemoArgs = {
  default: {
    class: "",
    slot: `<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>`,
  },
};

export const HgroupDemo = {
  render: renderElement.bind(null, "hgroup"),

  default(args: HgroupDemoArgsType = {}) {
    return this.render({ ...HgroupDemoArgs.default, ...args });
  },
};
