---
title: small
---

<script setup>
const helperHtml = `<input
  type="email"
  name="email"
  placeholder="Email"
  autocomplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
/>
<small id="email-helper">We'll never share your email with anyone else.</small>
`;
</script>

# &lt;small&gt;

`<small>` below form elements is muted and acts as helper text.

Use `aria-describedby` to associate it with the input.

## Helper Text

<HtmlPreviewer :code="helperHtml" />
