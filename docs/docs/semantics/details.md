---
title: details
---

<script setup>
const example1Html = `<details open name="accordion-group">
  <summary>Accordion 1</summary>
  <p>Flamingos are known for their bright pink feathers and distinctive long necks. These birds are social creatures that live in large groups, and a group of flamingos is called a flamboyance. They can often be seen standing on one leg, which helps them conserve body heat.</p>
</details>

<hr />

<details name="accordion-group">
  <summary>Accordion 2</summary>
  <ul>
    <li>Kangaroos are marsupials that are native to Australia.</li>
    <li>They are known for their powerful hind legs, which they use to hop around.</li>
    <li>Kangaroos can't walk backwards due to the shape of their legs and tail.</li>
    <li>Baby kangaroos, called joeys, are born very small and undeveloped and must crawl into their mother's pouch to continue developing.</li>
    <li>Some species of kangaroos can leap up to 30 feet in a single bound.</li>
  </ul>
</details>
`;
const dropdownExample1Html = `<details>
  <summary aria-haspopup="menu">Dropdown</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>

<select name="select" aria-label="Select" required>
  <option selected disabled value="">Select</option>
  <option>Solid</option>
  <option>Liquid</option>
  <option>Gas</option>
  <option>Plasma</option>
</select>
`;
const dropdownExample4Html = `<details>
  <summary aria-haspopup="menu">Select a phase of matter...</summary>
  <ul role="menu">
    <li>
      <label>
        <input type="radio" name="phase" value="solid" />
        Solid
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="phase" value="liquid" />
        Liquid
      </label>
    </li>
  </ul>
</details>
`;
const dropdownExample5Html = `<details>
  <summary aria-haspopup="menu">Select phases of matter...</summary>
  <ul role="menu">
    <li>
      <label>
        <input type="checkbox" name="solid" />
        Solid
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" name="liquid" />
        Liquid
      </label>
    </li>
  </ul>
</details>
`;
const dropdownExample6Html = `<details>
  <summary role="button" aria-haspopup="menu">Dropdown as a button</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>
`;
const dropdownExample8Html = `<details>
  <summary aria-haspopup="menu" aria-invalid="false">Valid phase of matter: Solid</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>

<details>
  <summary aria-haspopup="menu" aria-invalid="true">Debated classification: Plasma</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>
`;
const dropdownExample10Html = `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">Services</a></li>
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
    <li><button>Log Out</button></li>
  </ul>
</nav>
`;
const example3Html = `<h1>Frequently Asked Questions</h1>

<details>
  <summary>How do I get started?</summary>
  <div>
    <p>Simply include the CSS file in your HTML and start using the classes.</p>
  </div>
</details>

<hr />

<details>
  <summary>Can I customize the colors?</summary>
  <div>
    <p>Yes! Override the CSS variables to customize colors and more.</p>
  </div>
</details>

<hr />

<details>
  <summary>Is JavaScript required?</summary>
  <div>
    <p>No! Semanticus CSS is pure CSS with zero JavaScript dependencies.</p>
  </div>
</details>
`;
</script>

# &lt;details&gt;

The `<details>` element creates a native disclosure widget — a collapsible section that users can open and close without JavaScript. Its `<summary>` child acts as the visible label and toggle control.

Use the `open` attribute to expand it by default. Set the same `name` attribute on multiple `<details>` elements to create an exclusive accordion where only one can be open at a time.

## Overview

<HtmlPreviewer :code="example1Html" />

For style variants, see [Details Variants](/docs/variants/details).

## Dropdown

Dropdowns are built with `<details>` containing a `<summary aria-haspopup="menu">` and a `<ul role="menu">` as direct children and links inside should use `role="menuitem"`.

Unless they are in a `<nav>`, dropdowns are `width: 100%;` by default.

### Basic Dropdown

For style consistency with the form elements, dropdowns are styled like a select by default.

<HtmlPreviewer :code="dropdownExample1Html" />

### Dropdowns with Checkboxes and Radios

Dropdowns can be used as custom selects with `<input type="radio">` or `<input type="checkbox">`.

#### Radio Buttons

<HtmlPreviewer :code="dropdownExample4Html" />

#### Checkboxes

<HtmlPreviewer :code="dropdownExample5Html" />

### Variants

#### Different alignment (showcased with &lt;nav&gt;)

Use `<ul dir="rtl">` to change the alignment of the dropdown menu.

When using dropdowns inside a `<nav>`, they are automatically styled to fit the navigation layout.

<HtmlPreviewer :code="dropdownExample10Html" />

#### Dropdown as Button

`<summary role="button">` transforms the dropdown into a button.

<HtmlPreviewer :code="dropdownExample6Html" />

#### Validation States

Just like any form elements, validation states are provided with `aria-invalid`.

<HtmlPreviewer :code="dropdownExample8Html" />

## FAQ Page Example

<HtmlPreviewer :code="example3Html" />

