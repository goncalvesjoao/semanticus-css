import { renderElement } from "@demos/utils";

export type NavDemoArgsType = Record<string, string> & {
  slot?: string;
  class?: string;
};

export const NavDemoArgs = {
  logoTaglineLinks: {
    class: "",
    slot: `<h2>logo</h2>

<h3>tagline</h3>

<ul>
<li><a href="#!">Log out</a></li>
</ul>`,
  },
  searchDropdownAndLinks: {
    class: "",
    slot: `<input class="w-auto" type="search" name="search" placeholder="Search" aria-label="Search" />

<ul>
<li><a href="#" aria-current="page">Docs</a></li>
<li>
  <details>
    <summary aria-haspopup="menu">About</summary>
    <ul dir="rtl" role="menu">
      <li><a role="menuitem" href="#" onclick="event.preventDefault()">Services</a></li>
      <li><a role="menuitem" href="#" onclick="event.preventDefault()">Company</a></li>
      <li><a role="menuitem" href="#" onclick="event.preventDefault()">Careers</a></li>
    </ul>
  </details>
</li>
<li><a href="#" role="button" class="secondary">Log In</a></li>
</ul>`,
  },
  copyrightAndContactUs: {
    class: "",
    slot: `<p>Copyright</p>

<ul>
<li><a href="#!">Contact Us</a></li>
</ul>`,
  },
  pagesLinks: {
    class: "",
    slot: `<ul>
  <li><a href="#">Overview</a></li>
  <li><a href="#">Layout</a></li>
</ul>`,
  },
  pageLinks: {
    class: "",
    slot: `<ul>
  <li><a href="#">Install</a></li>
  <li><a href="#">Usage</a></li>
</ul>`,
  },
};

export const NavDemo = {
  render: renderElement.bind(null, "nav"),
  logoTaglineLinks(args: NavDemoArgsType = {}) {
    return this.render({ ...NavDemoArgs.logoTaglineLinks, ...args });
  },
  searchDropdownAndLinks(args: NavDemoArgsType = {}) {
    return this.render({ ...NavDemoArgs.searchDropdownAndLinks, ...args });
  },
  copyrightAndContactUs(args: NavDemoArgsType = {}) {
    return this.render({ ...NavDemoArgs.copyrightAndContactUs, ...args });
  },
  pagesLinks(args: NavDemoArgsType = {}) {
    return this.render({ ...NavDemoArgs.pagesLinks, ...args });
  },
  pageLinks(args: NavDemoArgsType = {}) {
    return this.render({ ...NavDemoArgs.pageLinks, ...args });
  },
};
