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
  basicSyntax: `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Products</a></li>
  </ul>
</nav>
`,
  contrastLinks: `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="contrast">About</a></li>
    <li><a href="#" class="contrast">Services</a></li>
    <li><a href="#" class="contrast">Products</a></li>
  </ul>
</nav>
`,
  iconButtons: `<nav>
  <ul>
    <li><a href="#" class="secondary" aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
    </a></li>
  </ul>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary" aria-label="Twitter">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
    </a></li>
  </ul>
</nav>
`,
  withButton: `<nav>
  <ul><li><strong>Acme Corp</strong></li></ul>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><button class="secondary">Products</button></li>
  </ul>
</nav>
`,
  withDropdown: `<nav>
  <ul><li><strong>Acme Corp</strong></li></ul>
  <ul>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">Account</summary>
        <ul role="menu" dir="rtl">
          <li><a role="menuitem" href="#">Profile</a></li>
          <li><a role="menuitem" href="#">Settings</a></li>
          <li><a role="menuitem" href="#">Security</a></li>
          <li><a role="menuitem" href="#">Logout</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
`,
  verticalInAside: `<aside>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</aside>
`,
  breadcrumb: `<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li>Page</li>
  </ul>
</nav>
`,
  overflow: `<nav>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
  </ul>
  <ul>
    <li><a href="#">Products</a></li>
  </ul>
</nav>
`,
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

  basicSyntax() {
    return NavDemoArgs.basicSyntax;
  },

  contrastLinks() {
    return NavDemoArgs.contrastLinks;
  },

  iconButtons() {
    return NavDemoArgs.iconButtons;
  },

  withButton() {
    return NavDemoArgs.withButton;
  },

  withDropdown() {
    return NavDemoArgs.withDropdown;
  },

  verticalInAside() {
    return NavDemoArgs.verticalInAside;
  },

  breadcrumb() {
    return NavDemoArgs.breadcrumb;
  },

  overflow() {
    return NavDemoArgs.overflow;
  },
};
