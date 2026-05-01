---
title: fieldset
---

<script setup>
const example1Html = `<fieldset>
  <legend>Personal Information</legend>
  <label>
    First name
    <input name="first_name" placeholder="First name" autocomplete="given-name" />
  </label>
  <label>
    Last name
    <input name="last_name" placeholder="Last name" autocomplete="family-name" />
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="Email" autocomplete="email" />
  </label>
</fieldset>
`;
const example2Html = `<form>
  <fieldset>
    <label>
      First name
      <input name="first_name" placeholder="First name" autocomplete="given-name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="Email" autocomplete="email" />
    </label>
  </fieldset>
  <input type="submit" value="Subscribe" />
</form>
`;
const example6Html = `<fieldset disabled>
  <legend>Disabled fieldset</legend>
  <label>
    Username
    <input name="username" placeholder="Username" />
  </label>
  <label>
    Password
    <input type="password" name="password" placeholder="Password" />
  </label>
  <input type="submit" value="Sign in" />
</fieldset>
`;
const example7Html = `<form>
  <fieldset role="group">
    <input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>
`;
</script>

# &lt;fieldset&gt;

`<fieldset>` groups related form elements together and can optionally include a `<legend>` label.

## Basic Fieldset

<HtmlPreviewer :code="example1Html" />

## Inside a Form

Inputs are `width: 100%` by default and match button sizes for consistent layouts. For label placement and helper text, see [&lt;label&gt;](/docs/semantics/label).

<HtmlPreviewer :code="example2Html" />

## Disabled Fieldset

Setting `disabled` on a `<fieldset>` disables all contained form elements.

<HtmlPreviewer :code="example6Html" />

## Usage with Group

Use `role="group"` inside a fieldset for inline input+button combinations. See [[role="group"]](/docs/semantics/role-group).

<HtmlPreviewer :code="example7Html" />

