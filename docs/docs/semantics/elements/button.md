---
title: button
---

<script setup>
const example1Html = `<button>Button</button>
`;
const example4Html = `<input type="submit" value="Submit">
<input type="button" value="Input Button">
`;
const example5Html = `<input type="reset" value="Reset">
`;
const example10Html = `<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Password">
  <button type="submit">Sign In</button>
</form>
`;
</script>

# &lt;button&gt;

The `<button>` element is a native interactive control that is keyboard-accessible and focusable by default, requiring no additional ARIA.

Use `type="submit"` for form submission, `type="reset"` to clear a form, without needing JavaScript.

## Basic Button

<HtmlPreviewer :code="example1Html" />

For `.secondary`, `.contrast` and `.ghost` styles, see [Button Variants](/variants/components/buttons).

On how to turn non-button elements into buttons, see [[role="button"]](/docs/semantics/role-button).

## Form Buttons

`type="submit"` and `type="button"` inputs are also displayed as buttons. All form buttons are `width: 100%;` by default, to match with the other form elements.

<HtmlPreviewer :code="example4Html" />

Reset inputs have the secondary style by default.

<HtmlPreviewer :code="example5Html" />

## Practical Examples

### Login Form

<HtmlPreviewer :code="example10Html" />
