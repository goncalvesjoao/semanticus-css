---
title: label
---

<script setup>
const insideHtml = `<label>
  First name
  <input name="first_name" placeholder="First name" autocomplete="given-name" />
</label>
<label>
  Email
  <input type="email" name="email" placeholder="Email" autocomplete="email" />
</label>
`;
const outsideHtml = `<label for="first_name">First name</label>
<input name="first_name" id="first_name" placeholder="First name" autocomplete="given-name" />
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="Email" autocomplete="email" />
`;
</script>

# &lt;label&gt;

Labels associate text descriptions with form controls.

`<input>` can be nested inside a `<label>` or associated externally using `for`/`id`.

## Input inside Label

Wrapping an input inside a label implicitly associates them.

<HtmlPreviewer :code="insideHtml" />

## Input outside Label

Use `for` on the label and a matching `id` on the input to associate them explicitly.

<HtmlPreviewer :code="outsideHtml" />

For helper text using `<small>`, see [&lt;small&gt;](/docs/semantics/small).
