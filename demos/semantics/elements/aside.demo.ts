import * as NavDemo from "@demos/semantics/elements/nav.demo";

export const basic = `<aside>
  <h4>BrandName</h4>
  <a href="#">Dashboard</a>
</aside>`;

export const leftSidebar = `<aside class="sidebar">
  <h4>Guide</h4>
  ${NavDemo.pagesLinks}

  <a href="#" role="button" class="ghost">Support</a>
</aside>`;

export const rightSidebar = `<aside class="sidebar">
  <h4>On this page</h4>
  ${NavDemo.pageLinks}
</aside>`;
