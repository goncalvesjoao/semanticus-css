import { renderElement } from '@demos/utils';
import { NavDemo } from '@demos/semantics/nav.demo';

export type HeaderDemoArgsType = {
  slot?: string;
  class?: string;
};

export const HeaderDemoArgs = {
  logoTaglineLinks: {
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

  logoTaglineLinks(args: HeaderDemoArgsType = {}) {
    return this.render({ ...HeaderDemoArgs.logoTaglineLinks, ...args });
  },

  searchDropdownAndLinks(args: HeaderDemoArgsType = {}) {
    return this.render({ ...HeaderDemoArgs.searchDropdownAndLinks, ...args });
  },
};
