---
title: 'role="button"'
---

<script setup>
const example1Html = `<div role="button" tabindex="0">Div as button</div>
`;
</script>

# [role="button"]

Any element with `role="button"` is rendered as a button.

This is useful when a non-button element (e.g. `<div>`, `<span>`) needs to behave and look like a button.

## Basic Role Button

<HtmlPreviewer :code="example1Html" />
