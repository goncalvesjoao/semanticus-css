---
title: [hidden]
---

<script setup>
const example1Html = `<p>This content is visible</p>
<p hidden>This content is hidden</p>
<p>This content is also visible</p>
`;
const example2Html = `<div>
  <button onclick="document.getElementById('toggle-content').toggleAttribute('hidden')">
    Toggle Content
  </button>
  <p id="toggle-content" hidden>
    This content can be toggled visible and hidden!
  </p>
</div>
`;
</script>

# [hidden]

Elements with the `[hidden]` attribute are hidden by default. For `<template>` elements, see [&lt;template&gt;](/docs/semantics/template).

## Hidden Attribute

Content with `hidden` attribute is not displayed.

<HtmlPreviewer :code="example1Html" />

## Toggle Visibility

Hidden content can be shown by removing the attribute.

<HtmlPreviewer :code="example2Html" />
