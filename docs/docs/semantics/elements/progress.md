---
title: progress
---

<script setup>
const example1Html = `<progress value="0" max="100"></progress>
<progress value="50" max="100"></progress>
<progress value="100" max="100"></progress>
`;
const example3Html = `<progress></progress>
`;
const example4Html = `<label>
  Upload progress
  <progress value="50" max="100">50%</progress>
</label>
`;
</script>

# &lt;progress&gt;

The `<progress>` element visually represents task completion.

Use the `value` and `max` attributes to set progress, or omit `value` for an indeterminate state.

Pair with a `<label>` to give it an accessible name for screen readers.

## Basic Progress

<HtmlPreviewer :code="example1Html" />

## Indeterminate Progress

<HtmlPreviewer :code="example3Html" />

## Progress with Label

<HtmlPreviewer :code="example4Html" />
