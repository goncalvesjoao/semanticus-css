import { renderElement } from '@demos/utils';
import { NavDemo } from '@demos/semantics/nav.demo';

export type HeaderDemoArgsType = {
  slot?: string;
  class?: string;
};

export const HeaderDemoArgs = {
  default: {
    class: '',
    slot: NavDemo.logoTaglineLinks(),
  },
  searchDropdownAndLinks: {
    class: '',
    slot: NavDemo.searchDropdownAndLinks(),
  },
};

export const HeaderDemo = {
  render: renderElement.bind(null, 'header'),

  default(args: HeaderDemoArgsType = {}) {
    return this.render({ ...HeaderDemoArgs.default, ...args });
  },

  searchDropdownAndLinks(args: HeaderDemoArgsType = {}) {
    return this.render({ ...HeaderDemoArgs.searchDropdownAndLinks, ...args });
  },
};
