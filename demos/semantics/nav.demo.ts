export type NavDemoArgs = {
  slot?: string;
  cssClass?: string;
};

const base = ({ slot = '', cssClass = '' }: NavDemoArgs) => {
  return `<nav class="${cssClass}">${slot}</nav>`;
};

export const NavDemo = {
  base,

  headerNavigation: () => base({
    slot: `<h2>Logo</h2>

<h3>tagline</h3>

<ul>
  <li><a href="#!">Log out</a></li>
</ul>`
  }),

  headerSearchNavigation: () => base({
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
</ul>`
  }),

  pagesNavigation: () => base({
    slot: `<ul>
  <li><a href="#">Overview</a></li>
  <li><a href="#">Layout</a></li>
</ul>`,
  }),

  pageNavigation: () => base({
    slot: `<ul>
  <li><a href="#">Install</a></li>
  <li><a href="#">Usage</a></li>
</ul>`,
  }),
};
