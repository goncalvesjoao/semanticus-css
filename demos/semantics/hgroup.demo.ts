import { renderElement } from '@demos/utils';

export type HgroupDemoArgsType = {
  slot?: string;
  class?: string;
};

export const HgroupDemoArgs = {
  helloWorld: {
    class: '',
    slot: `<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
};

export const HgroupDemo = {
  render: renderElement.bind(null, 'hgroup'),

  helloWorld(args: HgroupDemoArgsType = {}) {
    return this.render({ ...HgroupDemoArgs.helloWorld, ...args });
  },
};
