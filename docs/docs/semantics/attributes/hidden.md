---
title: [hidden]
---

<script setup>
import { HiddenDemo } from "@demos/semantics/attributes";
</script>

# [hidden]

Elements with the `[hidden]` attribute are hidden by default. For `<template>` elements, see [&lt;template&gt;](/docs/semantics/template).

## Hidden Attribute

Content with `hidden` attribute is not displayed.

<HtmlPreviewer :code="HiddenDemo.hidden" />

## Toggle Visibility

Hidden content can be shown by removing the attribute.

<HtmlPreviewer :code="HiddenDemo.toggle" />
