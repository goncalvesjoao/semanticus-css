---
title: 'role="group"'
---

<script setup>
const example1Html = `<div role="group">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>
`;
const example4Html = `<div role="group">
  <input type="text" placeholder="Enter value">
  <button>Go</button>
</div>
`;
const example5Html = `<div role="group">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <button>Action</button>
</div>
`;
const example6Html = `<div role="group">
  <input type="text" placeholder="First name">
  <input type="text" placeholder="Last name">
  <button>Save</button>
</div>
`;
const example9Html = `<nav aria-label="Pagination">
  <div role="group">
    <button disabled>Previous</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>Next</button>
  </div>
</nav>
`;
const example10Html = `<form>
  <label for="email">Subscribe to our newsletter</label>
  <div role="group">
    <input type="email" id="email" placeholder="your@email.com">
    <button type="submit">Subscribe</button>
  </div>
</form>
`;
</script>

# [role="group"]

The `role="group"` attribute identifies a set of related user interface objects.

Unlike a toolbar, it does not enforce keyboard navigation patterns between items.

Use it to semantically cluster controls and communicate their relationship to assistive technologies.

## Overview

Use `role="group"` to create connected groups of buttons or form elements. For search groups, see [[role="search"]](/docs/semantics/role-search).

## Button Groups

### Basic Group

<HtmlPreviewer :code="example1Html" />

## Input Groups

### Input with Button

<HtmlPreviewer :code="example4Html" />

### Select with Button

<HtmlPreviewer :code="example5Html" />

### Multiple Inputs

<HtmlPreviewer :code="example6Html" />

## Pagination Groups

<HtmlPreviewer :code="example9Html" />

## Practical Examples

### Newsletter Signup

<HtmlPreviewer :code="example10Html" />
