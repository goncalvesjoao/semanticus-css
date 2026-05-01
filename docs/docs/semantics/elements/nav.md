---
title: nav
---

<script setup>
const example1Html = `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Products</a></li>
  </ul>
</nav>
`;
const example2Html = `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="contrast">About</a></li>
    <li><a href="#" class="contrast">Services</a></li>
    <li><a href="#" class="contrast">Products</a></li>
  </ul>
</nav>
`;
const example3Html = `<nav>
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
`;
const example4Html = `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><button class="secondary">Products</button></li>
  </ul>
</nav>
`;
const example5Html = `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
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
`;
const example6Html = `<aside>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</aside>
`;
const example7Html = `<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li>Page</li>
  </ul>
</nav>
`;
const example8Html = `<nav>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
  </ul>
  <ul>
    <li><a href="#">Products</a></li>
  </ul>
</nav>
`;
</script>

# &lt;nav&gt;

The `<nav>` element is a landmark that identifies a region of navigation links.

Screen readers expose it as a navigation landmark, allowing users to jump directly to or skip past the navigation.

## Syntax

<HtmlPreviewer :code="example1Html" />

`<ul>` are automatically distributed horizontally.

`<li>` are unstyled and inlined.

`<a>` are underlined only on `:hover`.

## Link variants

You can use `.secondary`, `.contrast`, and `.ghost` classes (not available in the [class-less version](/guide/installation)).

<HtmlPreviewer :code="example2Html" />

<HtmlPreviewer :code="example3Html" />

## Buttons

You can use `<button>` inside `<li>`. Button sizes automatically match link size and margin.

<HtmlPreviewer :code="example4Html" />

## Dropdowns

You can use [dropdowns](/semantics/components/dropdown) inside Nav.

<HtmlPreviewer :code="example5Html" />

## Vertical stacking

Navs can be stacked vertically with `<ul>` inside `<aside>`.

<HtmlPreviewer :code="example6Html" />

## Breadcrumb

Breadcrumb navigation allows users to keep track of their location within the website.

<HtmlPreviewer :code="example7Html" />

## Overflow

When there is not enough space, the Nav items are not wrapped, and the Nav overflows on the horizontal axis.

<HtmlPreviewer :code="example8Html" />

