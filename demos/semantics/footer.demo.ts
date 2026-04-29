import { renderElement } from '@demos/utils';
import { NavDemo } from '@demos/semantics/nav.demo';

export type FooterDemoArgsType = {
  slot?: string;
  class?: string;
};

export const FooterDemoArgs = {
  copyrightAndContactUs: {
    class: '',
    slot: NavDemo.copyrightAndContactUs(),
  },
};

export const FooterDemo = {
  render: renderElement.bind(null, 'footer'),

  copyrightAndContactUs(args: FooterDemoArgsType = {}) {
    return this.render({ ...FooterDemoArgs.copyrightAndContactUs, ...args });
  },
};
