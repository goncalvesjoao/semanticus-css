---
title: 'role="search"'
---

<script setup>
const example1Html = `<form role="search">
  <input type="search" placeholder="Search...">
  <button type="submit">Search</button>
</form>
`;
const example2Html = `<form role="search">
  <input type="search" placeholder="Search products...">
  <button type="submit" aria-label="Search">→</button>
</form>
`;
const example3Html = `<form role="search">
  <select aria-label="Category">
    <option>All Categories</option>
    <option>Products</option>
    <option>Services</option>
    <option>Support</option>
  </select>
  <input type="search" placeholder="Search...">
  <button type="submit">Go</button>
</form>
`;
</script>

# [role="search"]

The `role="search"` attribute marks a landmark region containing site or application search functionality.

Screen readers expose it as a "search" landmark, allowing users to jump directly to the search form.

## Basic Search

<HtmlPreviewer :code="example1Html" />

## Search with Icon Button

<HtmlPreviewer :code="example2Html" />

## Filter Search

<HtmlPreviewer :code="example3Html" />

